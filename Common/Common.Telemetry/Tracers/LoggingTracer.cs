﻿// <copyright file="LoggingTracer.cs" company="OpenTelemetry Authors">
// Copyright 2018, OpenTelemetry Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// </copyright>

namespace Common.Telemetry.Tracers
{
    using System;
    using System.Collections.Generic;
    using System.Diagnostics;
    using OpenTelemetry.Trace;

    /// <summary>
    ///     Logger tracer.
    /// </summary>
    public class LoggingTracer : Tracer
    {
        private readonly string prefix;

        /// <summary>
        ///     Initializes a new instance of the <see cref="LoggingTracer" /> class.
        /// </summary>
        internal LoggingTracer(string prefix)
        {
            this.prefix = $"Tracer({prefix})";
            Logger.Log("Tracer.ctor()");
        }

        /// <inheritdoc />
        public override TelemetrySpan CurrentSpan => CurrentSpanUtils.CurrentSpan;

        /// <inheritdoc />
        public override IDisposable WithSpan(TelemetrySpan span, bool endOnDispose)
        {
            Logger.Log($"{prefix}.WithSpan {endOnDispose}");
            return new CurrentSpanUtils.LoggingScope(span);
        }

        /// <inheritdoc />
        public override TelemetrySpan StartRootSpan(string operationName, SpanKind kind, SpanCreationOptions options)
        {
            Logger.Log(
                $"{prefix}.StartRootSpan({operationName}, {kind}, {options.StartTimestamp:o}, {options.LinksFactory}, {options.Links})");
            return new LoggingSpan(operationName, kind);
        }

        /// <inheritdoc />
        public override TelemetrySpan StartSpan(string operationName, TelemetrySpan parent, SpanKind kind,
            SpanCreationOptions options)
        {
            Logger.Log(
                $"{prefix}.StartSpan({operationName}, {parent.GetType().Name}, {kind}, {options.StartTimestamp:o}, {options.LinksFactory}, {options.Links})");
            return new LoggingSpan(operationName, kind);
        }

        /// <inheritdoc />
        public override TelemetrySpan StartSpan(string operationName, in SpanContext parent, SpanKind kind,
            SpanCreationOptions options)
        {
            Logger.Log(
                $"{prefix}.StartSpan({operationName}, {parent.GetType().Name}, {kind}, {options.StartTimestamp:o}, {options.LinksFactory}, {options.Links})");
            return new LoggingSpan(operationName, kind);
        }

        /// <inheritdoc />
        public override TelemetrySpan StartSpanFromActivity(string operationName, Activity activity, SpanKind kind,
            IEnumerable<Link> links)
        {
            Logger.Log($"{prefix}.StartSpanFromActivity({operationName}, {activity.OperationName}, {kind}, {links})");
            return new LoggingSpan(operationName, kind);
        }
    }
}