// --------------------------------------------------------------------------------------------------------------------
// <copyright file="GrpcClientSettings.cs" company="Microsoft Corporation">
//   Copyright (c) 2020 Microsoft Corporation.  All rights reserved.
// </copyright>
// <summary>
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace Streaming.Protos
{
    public class GrpcClientSettings
    {
        public string Host { get; set; }
        public int Port { get; set; }
        public bool UseSecureChannel { get; set; }
        public string CACertSecret { get; set; }
        public string ClientCertSecret { get; set; }
        public string ClientKeySecret { get; set; }
    }
}