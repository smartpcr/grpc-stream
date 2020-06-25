namespace Streaming.NetClient
{
    using System;
    using System.IO;
    using System.Net;
    using System.Runtime.Loader;
    using System.Threading;
    using System.Threading.Tasks;
    using Common.Auth;
    using Common.Config;
    using Common.KeyVault;
    using Common.Telemetry;
    using Grpc.Core;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Hosting;
    using Microsoft.Extensions.Logging;
    using Streaming.Models;
    using Streaming.Protos;
    using ILogger = Grpc.Core.Logging.ILogger;

    class Program
    {
        static async Task Main(string[] args)
        {
            ThreadPool.SetMinThreads(100, 100);
            ServicePointManager.DefaultConnectionLimit = 50;
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;

            var cts = new CancellationTokenSource();
            AssemblyLoadContext.Default.Unloading += (ctx) => cts.Cancel();
            Console.CancelKeyPress += (sender, cpe) => cts.Cancel();

            var builder = new HostBuilder()
                .ConfigureServices((hostingContext, services) =>
                {
                    var loggerFactory = new LoggerFactory();
                    var logger = loggerFactory.CreateLogger<Program>();
                    ConfigureServices(services, logger, args);
                    services.AddGrpcClient(loggerFactory);
                })
                .UseConsoleLifetime();
            using (var host = builder.Build())
            {
                var channel = host.Services.GetRequiredService<Channel>();
                var logger = host.Services.GetRequiredService<ILogger<Program>>();
                await channel.ConnectAsync().ContinueWith(task =>
                {
                    if (task.Status == TaskStatus.RanToCompletion)
                    {
                        logger.LogInformation("GRPC client connected successfully");
                    }
                }, cts.Token);
                
                var greetClient = new Greeter.GreeterClient(channel);
                var greetResponse = greetClient.Greet(new GreetingRequest(){Greeting = new Greeting(){FirstName = "xd", LastName = "li"}});
                Console.WriteLine($"Greet result: {greetResponse.Result}");
            
                var calcClient = new Calculator.CalculatorClient(channel);
                var calcResult = await calcClient.AddAsync(new AddRequest() {Num1 = 1, Num2 = 2});
                Console.WriteLine($"Calc result: {calcResult.Result}");

                await GreetMany(channel, cts.Token);
                
                Console.ReadKey();
            }
        }

        private static async Task GreetMany(Channel channel, CancellationToken cancel)
        {
            var greetClient = new Greeter.GreeterClient(channel);
            var greetResponse = greetClient.GreetManyTimes(
                new GreetManyTimesRequest()
                {
                    Greeting = new Greeting(){FirstName = "xd", LastName = "li"}
                }, 
                deadline: DateTime.UtcNow.AddMilliseconds(1000));

            Func<Task<(bool haveNewData, bool skip)>> tryGetNext = async () =>
            {
                bool haveNewResult = false;
                bool skip = false;
                try
                {
                    haveNewResult = await greetResponse.ResponseStream.MoveNext(cancel);
                }
                catch (RpcException ex) when (ex.StatusCode == StatusCode.DataLoss)
                {
                    Console.WriteLine($"Data loss: {ex.Status.Detail}");
                    skip = true;
                }
                catch (RpcException ex) when (ex.StatusCode == StatusCode.DeadlineExceeded)
                {
                    Console.WriteLine($"timeout: {ex.Status.Detail}");
                    skip = true;
                }

                return (haveNewResult, skip);
            };

            bool haveData = true;
            while (haveData)
            {
                bool skipCurrent;
                (haveData, skipCurrent) = await tryGetNext();
                if (!skipCurrent)
                {
                    Console.WriteLine($"Greet result: {greetResponse.ResponseStream.Current.Result}");
                }
            }
        }
        
        private static void ConfigureServices(IServiceCollection services, Microsoft.Extensions.Logging.ILogger logger, string[] args)
        {
            var config = SetupConfig(services, args);
            SetupConfigOptions(services);
            RegisterDependencies(services, logger, config);
        }

        private static IConfiguration SetupConfig(IServiceCollection services, string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", false, false)
                .AddJsonFile($"appsettings.{Environment.GetEnvironmentVariable("AZURE_FUNCTIONS_ENVIRONMENT")}.json", true, false)
                .AddJsonFile("local.settings.json", true, false)
                .AddEnvironmentVariables()
                .AddCommandLine(args)
                .Build();
            services.AddSingleton<IConfiguration>(config);
            Console.WriteLine("registered configuration");
            return config;
        }

        private static void SetupConfigOptions(IServiceCollection services)
        {
            services
                .ConfigureSettings<AppInsightsSettings>()
                .ConfigureSettings<AadSettings>()
                .ConfigureSettings<VaultSettings>()
                .ConfigureSettings<GrpcClientSettings>()
                .AddOptions();
        }

        private static void RegisterDependencies(IServiceCollection services, Microsoft.Extensions.Logging.ILogger logger, IConfiguration config)
        {
            services.AddAppInsights(config, logger);
            services.AddKeyVault(config);
            services.AddHealthChecks();
        }
    }
}
