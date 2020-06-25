// --------------------------------------------------------------------------------------------------------------------
// <copyright file="AsyncExtension.cs" company="Microsoft Corporation">
//   Copyright (c) 2020 Microsoft Corporation.  All rights reserved.
// </copyright>
// <summary>
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace Common.Config
{
    using System.Threading.Tasks;

    public static class AsyncExtension
    {
        public static T SyncResult<T>(this Task<T> task)
        {
            return task.ConfigureAwait(false).GetAwaiter().GetResult();
        }
    }
}