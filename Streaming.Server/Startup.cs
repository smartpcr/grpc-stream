
namespace Streaming.Server
{
    using System;
    using System.IO;
    using System.Text.Json;
    using Common.Auth;
    using Common.Config;
    using Common.KeyVault;
    using Common.Telemetry;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Hosting;
    using Microsoft.Extensions.Logging;
    using Streaming.Models;
    using Streaming.Protos;
    using Streaming.Server.Services;

    public class Startup
    {
        private readonly ILoggerFactory loggerFactory;
        private readonly IWebHostEnvironment env;
        private readonly ILogger<Startup> logger;

        public Startup(ILoggerFactory loggerFactory, IWebHostEnvironment env)
        {
            logger = loggerFactory.CreateLogger<Startup>();
            this.loggerFactory = loggerFactory;
            this.env = env;
        }
        
        public void ConfigureServices(IServiceCollection services)
        {
            var config = SetupConfig(services);
            SetupOptions(services);
            SetupDI(services, config);
            SetupMvc(services);
            SetupGrpc(services);
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            ConfigMvc(app);
        }
        
        #region config services

        private IConfiguration SetupConfig(IServiceCollection services)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", false, false)
                .AddJsonFile($"appsettings.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT")}.json", true,
                    false)
                .AddEnvironmentVariables()
                .Build();
            services.AddSingleton<IConfiguration>(config);
            Console.WriteLine(@"registered configuration");
            return config;
        }

        private void SetupOptions(IServiceCollection services)
        {
            services
                .ConfigureSettings<AppInsightsSettings>()
                .ConfigureSettings<PrometheusMetricSettings>()
                .ConfigureSettings<AadSettings>()
                .ConfigureSettings<VaultSettings>()
                .ConfigureSettings<GrpcServerSettings>()
                .AddOptions();
        }

        private void SetupDI(IServiceCollection services, IConfiguration config)
        {
            // kv client
            services.AddKeyVault(config);

            // app insights metrics and logging
            services.AddAppInsights(config, logger);

        }

        private void SetupMvc(IServiceCollection services)
        {
            services
                .AddMvc(opts => { opts.EnableEndpointRouting = false; })
                .AddJsonOptions(opt =>
                {
                    opt.JsonSerializerOptions.IgnoreNullValues = true;
                    opt.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
                })
                .SetCompatibilityVersion(CompatibilityVersion.Latest)
                .AddControllersAsServices();
        }

        private void SetupGrpc(IServiceCollection services)
        {
            services.AddGrpcServer(
                loggerFactory,
                Greeter.BindService(new GreeterService(loggerFactory)),
                Calculator.BindService(new CalculatorService(loggerFactory)));
        }
        #endregion

        #region config app
        private void ConfigMvc(IApplicationBuilder app)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();
            app.UseMvc();
        }
        #endregion
    }
}
