namespace Streaming.Server.Services
{
    using System;
    using System.Threading.Tasks;
    using Grpc.Core;
    using Microsoft.Extensions.Logging;
    using Streaming.Models;

    public class GreeterService : Greeter.GreeterBase
    {
        private readonly ILogger<GreeterService> logger;
        
        public GreeterService(ILoggerFactory loggerFactory)
        {
            logger = loggerFactory.CreateLogger<GreeterService>();
        }

        public override Task<GreetingResponse> Greet(GreetingRequest request, ServerCallContext context)
        {
            logger.LogInformation($"calling {nameof(Greet)}");
            logger.LogInformation($"{request}");
            var result = $"Hello {request.Greeting.FirstName} {request.Greeting.LastName}";
            return Task.FromResult(new GreetingResponse() {Result = result});
        }

        public override async Task GreetManyTimes(GreetManyTimesRequest request, IServerStreamWriter<GreetManyTimesResponse> responseStream, ServerCallContext context)
        {
            logger.LogInformation($"calling {nameof(GreetManyTimes)}");
            logger.LogInformation($"{request}");

            int index = 0;
            while (!context.CancellationToken.IsCancellationRequested)
            {
                index++;
                var result = $"Hello #{index}: {request.Greeting.FirstName} {request.Greeting.LastName}";
                if (index % 5 == 0)
                {
                    var metadata = new Metadata()
                    {
                        {"index", index.ToString()}
                    };
                    throw new RpcException(new Status(StatusCode.DataLoss, "missing data"), metadata);
                }

                await responseStream.WriteAsync(new GreetManyTimesResponse() {Result = result});
                await Task.Delay(TimeSpan.FromMilliseconds(500));
            }
        }

        public override async Task<LongGreetResponse> LongGreet(IAsyncStreamReader<LongGreetRequest> requestStream, ServerCallContext context)
        {
            logger.LogInformation($"calling {nameof(LongGreet)}");
            string result = "";
            while (await requestStream.MoveNext())
            {
                result += $"Hello {requestStream.Current.Greeting.FirstName} {requestStream.Current.Greeting.LastName} \n";
            }

            return new LongGreetResponse(){Result = result};
        }

        public override async Task GreetEveryone(IAsyncStreamReader<GreetEveryoneRequest> requestStream, IServerStreamWriter<GreetEveryoneResponse> responseStream, ServerCallContext context)
        {
            logger.LogInformation($"calling {nameof(GreetEveryone)}");
            while (await requestStream.MoveNext())
            {
                var result = $"Hello {requestStream.Current.Greeting.FirstName} {requestStream.Current.Greeting.LastName}";
                logger.LogInformation($"Sending {result}");
                await responseStream.WriteAsync(new GreetEveryoneResponse() {Result = result});
            }
        }
    }
}
