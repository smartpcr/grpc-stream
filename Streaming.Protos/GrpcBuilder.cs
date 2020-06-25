// --------------------------------------------------------------------------------------------------------------------
// <copyright file="GrpcBuilder.cs" company="Microsoft Corporation">
//   Copyright (c) 2020 Microsoft Corporation.  All rights reserved.
// </copyright>
// <summary>
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace Streaming.Protos
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Threading.Tasks;
    using Common.Config;
    using Common.KeyVault;
    using Grpc.Core;
    using Microsoft.Azure.KeyVault;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Hosting;
    using Microsoft.Extensions.Logging;

    public static class GrpcBuilder
    {
        public static void AddGrpcServer(this IServiceCollection services, ILoggerFactory loggerFactory, params ServerServiceDefinition[] grpcServices)
        {
            var svcProvider = services.BuildServiceProvider();
            var config = svcProvider.GetRequiredService<IConfiguration>();
            var grpcServerSettings = config.GetConfiguredSettings<GrpcServerSettings>();
            
            ServerCredentials credentials ;
            if (grpcServerSettings.UseSecureChannel)
            {
                var kvClient = svcProvider.GetRequiredService<IKeyVaultClient>();
                var vaultSettings = config.GetConfiguredSettings<VaultSettings>();
                var caCrt = kvClient.GetSecretAsync(vaultSettings.VaultUrl, grpcServerSettings.CACertSecret).SyncResult().Value;
                var serverCrt = kvClient.GetSecretAsync(vaultSettings.VaultUrl, grpcServerSettings.ServerCertSecret).SyncResult().Value;
                var serverKey = kvClient.GetSecretAsync(vaultSettings.VaultUrl, grpcServerSettings.ServerKeySecret).SyncResult().Value;
                // var caCrt = File.ReadAllText(@"C:\Users\xiaodoli\.certs\node\ca.crt");
                // var serverCrt = File.ReadAllText(@"C:\Users\xiaodoli\.certs\node\server.crt");
                // var serverKey = File.ReadAllText(@"C:\Users\xiaodoli\.certs\node\server.key");
                credentials = new SslServerCredentials(new List<KeyCertificatePair>() {new KeyCertificatePair(serverCrt, serverKey)}, caCrt, true);
            }
            else
            {
                credentials = ServerCredentials.Insecure;
            }
            
            var server = new Server()
            {
                Ports = { new ServerPort(grpcServerSettings.Host, grpcServerSettings.PortNumber, credentials)}
            };
            foreach (var grpcSvc in grpcServices)
            {
                server.Services.Add(grpcSvc);
            }

            server.Start();
            var logger = loggerFactory.CreateLogger("grpc");
            logger.LogInformation($"GRPC server is listening on port: {grpcServerSettings.PortNumber}");
            var appLifetime = svcProvider.GetRequiredService<IHostApplicationLifetime>();
            appLifetime.ApplicationStopping.Register(() =>
            {
                logger.LogInformation("Application is shutting down, shutting down GRPC server...");
                server?.ShutdownAsync().Wait();
            });

            services.AddSingleton(server);
        }

        public static void AddGrpcClient(this IServiceCollection services, ILoggerFactory loggerFactory)
        {
            var svcProvider = services.BuildServiceProvider();
            var config = svcProvider.GetRequiredService<IConfiguration>();
            var grpcClientSettings = config.GetConfiguredSettings<GrpcClientSettings>();
            
            ChannelCredentials channelCredentials;
            if (grpcClientSettings.UseSecureChannel)
            {
                var kvClient = svcProvider.GetRequiredService<IKeyVaultClient>();
                var vaultSettings = config.GetConfiguredSettings<VaultSettings>();
                var caCrt = kvClient.GetSecretAsync(vaultSettings.VaultUrl, grpcClientSettings.CACertSecret).SyncResult().Value;
                var clientCert = kvClient.GetSecretAsync(vaultSettings.VaultUrl, grpcClientSettings.ClientCertSecret).SyncResult().Value;
                var clientKey = kvClient.GetSecretAsync(vaultSettings.VaultUrl, grpcClientSettings.ClientKeySecret).SyncResult().Value;
                // var caCrt = File.ReadAllText(@"C:\Users\xiaodoli\.certs\node\ca.crt");
                // var clientCert = File.ReadAllText(@"C:\Users\xiaodoli\.certs\node\client.crt");
                // var clientKey = File.ReadAllText(@"C:\Users\xiaodoli\.certs\node\client.key");
                channelCredentials = new SslCredentials(caCrt, new KeyCertificatePair(clientCert, clientKey));
            }
            else
            {
                channelCredentials = ChannelCredentials.Insecure;
            }

            var logger = loggerFactory.CreateLogger("grpc");
            logger.LogInformation($"Connecting to GRPC server at {grpcClientSettings.Host}:{grpcClientSettings.Port}");
            var channel = new Channel(grpcClientSettings.Host, grpcClientSettings.Port, channelCredentials);
            // var appLifetime = svcProvider.GetRequiredService<IHostApplicationLifetime>();
            // appLifetime.ApplicationStopping.Register(() =>
            // {
            //     logger.LogInformation("Application is shutting down, shutting down GRPC server...");
            //     channel?.ShutdownAsync().Wait();
            // });

            services.AddSingleton(channel);
        }
    }
}