// --------------------------------------------------------------------------------------------------------------------
// <copyright file="GrpcServerSettings.cs" company="Microsoft Corporation">
//   Copyright (c) 2020 Microsoft Corporation.  All rights reserved.
// </copyright>
// <summary>
// </summary>
// --------------------------------------------------------------------------------------------------------------------


namespace Streaming.Protos
{
    public class GrpcServerSettings
    {
        public string Host { get; set; }
        public int PortNumber { get; set; }
        public bool UseSecureChannel { get; set; }
        public string CACertSecret { get; set; }
        public string ServerCertSecret { get; set; }
        public string ServerKeySecret { get; set; }
    }
}