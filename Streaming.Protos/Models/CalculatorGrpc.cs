// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: calculator.proto
// </auto-generated>
#pragma warning disable 0414, 1591
#region Designer generated code

using grpc = global::Grpc.Core;

namespace Streaming.Models {
  public static partial class Calculator
  {
    static readonly string __ServiceName = "streaming.Calculator";

    static readonly grpc::Marshaller<global::Streaming.Models.AddRequest> __Marshaller_streaming_AddRequest = grpc::Marshallers.Create((arg) => global::Google.Protobuf.MessageExtensions.ToByteArray(arg), global::Streaming.Models.AddRequest.Parser.ParseFrom);
    static readonly grpc::Marshaller<global::Streaming.Models.CalcResponse> __Marshaller_streaming_CalcResponse = grpc::Marshallers.Create((arg) => global::Google.Protobuf.MessageExtensions.ToByteArray(arg), global::Streaming.Models.CalcResponse.Parser.ParseFrom);

    static readonly grpc::Method<global::Streaming.Models.AddRequest, global::Streaming.Models.CalcResponse> __Method_Add = new grpc::Method<global::Streaming.Models.AddRequest, global::Streaming.Models.CalcResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "Add",
        __Marshaller_streaming_AddRequest,
        __Marshaller_streaming_CalcResponse);

    /// <summary>Service descriptor</summary>
    public static global::Google.Protobuf.Reflection.ServiceDescriptor Descriptor
    {
      get { return global::Streaming.Models.CalculatorReflection.Descriptor.Services[0]; }
    }

    /// <summary>Base class for server-side implementations of Calculator</summary>
    [grpc::BindServiceMethod(typeof(Calculator), "BindService")]
    public abstract partial class CalculatorBase
    {
      public virtual global::System.Threading.Tasks.Task<global::Streaming.Models.CalcResponse> Add(global::Streaming.Models.AddRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

    }

    /// <summary>Client for Calculator</summary>
    public partial class CalculatorClient : grpc::ClientBase<CalculatorClient>
    {
      /// <summary>Creates a new client for Calculator</summary>
      /// <param name="channel">The channel to use to make remote calls.</param>
      public CalculatorClient(grpc::ChannelBase channel) : base(channel)
      {
      }
      /// <summary>Creates a new client for Calculator that uses a custom <c>CallInvoker</c>.</summary>
      /// <param name="callInvoker">The callInvoker to use to make remote calls.</param>
      public CalculatorClient(grpc::CallInvoker callInvoker) : base(callInvoker)
      {
      }
      /// <summary>Protected parameterless constructor to allow creation of test doubles.</summary>
      protected CalculatorClient() : base()
      {
      }
      /// <summary>Protected constructor to allow creation of configured clients.</summary>
      /// <param name="configuration">The client configuration.</param>
      protected CalculatorClient(ClientBaseConfiguration configuration) : base(configuration)
      {
      }

      public virtual global::Streaming.Models.CalcResponse Add(global::Streaming.Models.AddRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return Add(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      public virtual global::Streaming.Models.CalcResponse Add(global::Streaming.Models.AddRequest request, grpc::CallOptions options)
      {
        return CallInvoker.BlockingUnaryCall(__Method_Add, null, options, request);
      }
      public virtual grpc::AsyncUnaryCall<global::Streaming.Models.CalcResponse> AddAsync(global::Streaming.Models.AddRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return AddAsync(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      public virtual grpc::AsyncUnaryCall<global::Streaming.Models.CalcResponse> AddAsync(global::Streaming.Models.AddRequest request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncUnaryCall(__Method_Add, null, options, request);
      }
      /// <summary>Creates a new instance of client from given <c>ClientBaseConfiguration</c>.</summary>
      protected override CalculatorClient NewInstance(ClientBaseConfiguration configuration)
      {
        return new CalculatorClient(configuration);
      }
    }

    /// <summary>Creates service definition that can be registered with a server</summary>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    public static grpc::ServerServiceDefinition BindService(CalculatorBase serviceImpl)
    {
      return grpc::ServerServiceDefinition.CreateBuilder()
          .AddMethod(__Method_Add, serviceImpl.Add).Build();
    }

    /// <summary>Register service method with a service binder with or without implementation. Useful when customizing the  service binding logic.
    /// Note: this method is part of an experimental API that can change or be removed without any prior notice.</summary>
    /// <param name="serviceBinder">Service methods will be bound by calling <c>AddMethod</c> on this object.</param>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    public static void BindService(grpc::ServiceBinderBase serviceBinder, CalculatorBase serviceImpl)
    {
      serviceBinder.AddMethod(__Method_Add, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Streaming.Models.AddRequest, global::Streaming.Models.CalcResponse>(serviceImpl.Add));
    }

  }
}
#endregion
