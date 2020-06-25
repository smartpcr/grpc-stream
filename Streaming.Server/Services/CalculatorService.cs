// --------------------------------------------------------------------------------------------------------------------
// <copyright file="CalculatorService.cs" company="Microsoft Corporation">
//   Copyright (c) 2020 Microsoft Corporation.  All rights reserved.
// </copyright>
// <summary>
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace Streaming.Server.Services
{
    using System.Threading.Tasks;
    using Grpc.Core;
    using Microsoft.Extensions.Logging;
    using Streaming.Models;

    public class CalculatorService : Calculator.CalculatorBase
    {
        private readonly ILogger<CalculatorService> logger;
        
        public CalculatorService(ILoggerFactory loggerFactory)
        {
            logger = loggerFactory.CreateLogger<CalculatorService>();
        }

        public override Task<CalcResponse> Add(AddRequest request, ServerCallContext context)
        {
            logger.LogInformation($"calling {nameof(Add)}");
            logger.LogInformation($"{request}");

            return Task.FromResult(new CalcResponse() {Result = request.Num1 + request.Num2});
        }
    }
}