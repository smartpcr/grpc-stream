﻿namespace Common.Telemetry.RuntimeTelemetry.EventSources
{
    using System;

    /// <summary>
    ///     event source and keywords for runtime metrics
    /// </summary>
    public class DotNetRuntimeEventSource
    {
        public enum GCReason : uint
        {
            AllocSmall,
            Induced,
            LowMemory,
            Empty,
            AllocLarge,
            OutOfSpaceSOH,
            OutOfSpaceLOH,
            InducedNotForced,
            Internal,
            InducedLowMemory,
            InducedCompacting,
            LowMemoryHost,
            PMFullGC,
            LowMemoryHostBlocking
        }

        public enum GCType : uint
        {
            NonConcurrentGC,
            BackgroundGC,
            ForegroundGC
        }

        [Flags]
        public enum Keywords : long
        {
            None = 0,
            All = -65, // -0x0000000000000041

            /// <summary>
            ///     Logging when garbage collections and finalization happen.
            /// </summary>
            GC = 1,

            /// <summary>Events when GC handles are set or destroyed.</summary>
            GCHandle = 2,
            Binder = 4,

            /// <summary>
            ///     Logging when modules actually get loaded and unloaded.
            /// </summary>
            Loader = 8,

            /// <summary>Logging when Just in time (JIT) compilation occurs.</summary>
            Jit = 16, // 0x0000000000000010

            /// <summary>
            ///     Logging when precompiled native (NGEN) images are loaded.
            /// </summary>
            NGen = 32, // 0x0000000000000020

            /// <summary>
            ///     Indicates that on attach or module load , a rundown of all existing methods should be done
            /// </summary>
            StartEnumeration = 64, // 0x0000000000000040

            /// <summary>
            ///     Indicates that on detach or process shutdown, a rundown of all existing methods should be done
            /// </summary>
            StopEnumeration = 128, // 0x0000000000000080

            /// <summary>
            ///     Events associated with validating security restrictions.
            /// </summary>
            Security = 1024, // 0x0000000000000400

            /// <summary>
            ///     Events for logging resource consumption on an app-domain level granularity
            /// </summary>
            AppDomainResourceManagement = 2048, // 0x0000000000000800

            /// <summary>
            ///     Logging of the internal workings of the Just In Time compiler.  This is fairly verbose.
            ///     It details decisions about interesting optimization (like inlining and tail call)
            /// </summary>
            JitTracing = 4096, // 0x0000000000001000

            /// <summary>
            ///     Log information about code thunks that transition between managed and unmanaged code.
            /// </summary>
            Interop = 8192, // 0x0000000000002000

            /// <summary>
            ///     Log when lock contention occurs.  (Monitor.Enters actually blocks)
            /// </summary>
            Contention = 16384, // 0x0000000000004000

            /// <summary>Log exception processing.</summary>
            Exception = 32768, // 0x0000000000008000

            /// <summary>
            ///     Log events associated with the threadpool, and other threading events.
            /// </summary>
            Threading = 65536, // 0x0000000000010000

            /// <summary>
            ///     Dump the native to IL mapping of any method that is JIT compiled.  (V4.5 runtimes and above).
            /// </summary>
            JittedMethodILToNativeMap = 131072, // 0x0000000000020000

            /// <summary>
            ///     If enabled will suppress the rundown of NGEN events on V4.0 runtime (has no effect on Pre-V4.0 runtimes).
            /// </summary>
            OverrideAndSuppressNGenEvents = 262144, // 0x0000000000040000

            /// <summary>Enables the 'BulkType' event</summary>
            Type = 524288, // 0x0000000000080000

            /// <summary>
            ///     Enables the events associated with dumping the GC heap
            /// </summary>
            GCHeapDump = 1048576, // 0x0000000000100000

            /// <summary>
            ///     Enables allocation sampling with the 'fast'.  Sample to limit to 100 allocations per second per type.
            ///     This is good for most detailed performance investigations.   Note that this DOES update the allocation
            ///     path to be slower and only works if the process start with this on.
            /// </summary>
            GCSampledObjectAllocationHigh = 2097152, // 0x0000000000200000

            /// <summary>
            ///     Enables events associate with object movement or survival with each GC.
            /// </summary>
            GCHeapSurvivalAndMovement = 4194304, // 0x0000000000400000

            /// <summary>
            ///     Triggers a GC.  Can pass a 64 bit value that will be logged with the GC Start event so you know which GC you
            ///     actually triggered.
            /// </summary>
            GCHeapCollect = 8388608, // 0x0000000000800000

            /// <summary>
            ///     Indicates that you want type names looked up and put into the events (not just meta-data tokens).
            /// </summary>
            GCHeapAndTypeNames = 16777216, // 0x0000000001000000

            /// <summary>
            ///     Enables allocation sampling with the 'slow' rate, Sample to limit to 5 allocations per second per type.
            ///     This is reasonable for monitoring.    Note that this DOES update the allocation path to be slower
            ///     and only works if the process start with this on.
            /// </summary>
            GCSampledObjectAllocationLow = 33554432, // 0x0000000002000000

            /// <summary>
            ///     Turns on capturing the stack and type of object allocation made by the .NET Runtime.   This is only
            ///     supported after V4.5.3 (Late 2014)   This can be very verbose and you should seriously using
            ///     GCSampledObjectAllocationHigh
            ///     instead (and GCSampledObjectAllocationLow for production scenarios).
            /// </summary>
            GCAllObjectAllocation = GCSampledObjectAllocationLow | GCSampledObjectAllocationHigh, // 0x0000000002200000

            /// <summary>
            ///     This suppresses NGEN events on V4.0 (where you have NGEN PDBs), but not on V2.0 (which does not know about this
            ///     bit and also does not have NGEN PDBS).
            /// </summary>
            SupressNGen = OverrideAndSuppressNGenEvents, // 0x0000000000040000

            /// <summary>TODO document</summary>
            PerfTrack = 536870912, // 0x0000000020000000

            /// <summary>
            ///     Also log the stack trace of events for which this is valuable.
            /// </summary>
            Stack = 1073741824, // 0x0000000040000000

            /// <summary>
            ///     This allows tracing work item transfer events (thread pool enqueue/dequeue/ioenqueue/iodequeue/a.o.)
            /// </summary>
            ThreadTransfer = 2147483648, // 0x0000000080000000

            /// <summary>.NET Debugger events</summary>
            Debugger = 4294967296, // 0x0000000100000000

            /// <summary>Events intended for monitoring on an ongoing basis.</summary>
            Monitoring = 8589934592, // 0x0000000200000000

            /// <summary>
            ///     Events that will dump PDBs of dynamically generated assemblies to the ETW stream.
            /// </summary>
            Codesymbols = 17179869184, // 0x0000000400000000

            /// <summary>
            ///     Recommend default flags (good compromise on verbosity).
            /// </summary>
            Default = Codesymbols | ThreadTransfer | Stack | SupressNGen | GCHeapAndTypeNames |
                      GCHeapSurvivalAndMovement | Type | JittedMethodILToNativeMap | Threading | Exception |
                      Contention |
                      AppDomainResourceManagement | Security | StopEnumeration | NGen | Jit | Loader | Binder |
                      GC, // 0x00000004C14FCCBD

            /// <summary>
            ///     What is needed to get symbols for JIT compiled code.
            /// </summary>
            JITSymbols = SupressNGen | JittedMethodILToNativeMap | StopEnumeration | Jit | Loader, // 0x0000000000060098

            /// <summary>
            ///     This provides the flags commonly needed to take a heap .NET Heap snapshot with ETW.
            /// </summary>
            GCHeapSnapshot = GCHeapAndTypeNames | GCHeapCollect | GCHeapDump | Type | GC // 0x0000000001980001
        }

        public enum ThreadAdjustmentReason : uint
        {
            Warmup,
            Initializing,
            RandomMove,
            ClimbingMove,
            ChangePoint,
            Stabilizing,
            Starvation,
            ThreadTimedOut
        }

        public static readonly Guid Id = WellKnownEventSources.DotNetRuntime;
    }
}