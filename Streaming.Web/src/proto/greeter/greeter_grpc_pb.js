// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var greeter_pb = require('./greeter_pb.js');

function serialize_streaming_GreetEveryoneRequest(arg) {
  if (!(arg instanceof greeter_pb.GreetEveryoneRequest)) {
    throw new Error('Expected argument of type streaming.GreetEveryoneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_streaming_GreetEveryoneRequest(buffer_arg) {
  return greeter_pb.GreetEveryoneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_streaming_GreetEveryoneResponse(arg) {
  if (!(arg instanceof greeter_pb.GreetEveryoneResponse)) {
    throw new Error('Expected argument of type streaming.GreetEveryoneResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_streaming_GreetEveryoneResponse(buffer_arg) {
  return greeter_pb.GreetEveryoneResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_streaming_GreetManyTimesRequest(arg) {
  if (!(arg instanceof greeter_pb.GreetManyTimesRequest)) {
    throw new Error('Expected argument of type streaming.GreetManyTimesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_streaming_GreetManyTimesRequest(buffer_arg) {
  return greeter_pb.GreetManyTimesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_streaming_GreetManyTimesResponse(arg) {
  if (!(arg instanceof greeter_pb.GreetManyTimesResponse)) {
    throw new Error('Expected argument of type streaming.GreetManyTimesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_streaming_GreetManyTimesResponse(buffer_arg) {
  return greeter_pb.GreetManyTimesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_streaming_GreetingRequest(arg) {
  if (!(arg instanceof greeter_pb.GreetingRequest)) {
    throw new Error('Expected argument of type streaming.GreetingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_streaming_GreetingRequest(buffer_arg) {
  return greeter_pb.GreetingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_streaming_GreetingResponse(arg) {
  if (!(arg instanceof greeter_pb.GreetingResponse)) {
    throw new Error('Expected argument of type streaming.GreetingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_streaming_GreetingResponse(buffer_arg) {
  return greeter_pb.GreetingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_streaming_LongGreetRequest(arg) {
  if (!(arg instanceof greeter_pb.LongGreetRequest)) {
    throw new Error('Expected argument of type streaming.LongGreetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_streaming_LongGreetRequest(buffer_arg) {
  return greeter_pb.LongGreetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_streaming_LongGreetResponse(arg) {
  if (!(arg instanceof greeter_pb.LongGreetResponse)) {
    throw new Error('Expected argument of type streaming.LongGreetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_streaming_LongGreetResponse(buffer_arg) {
  return greeter_pb.LongGreetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreeterService = exports.GreeterService = {
  // Unary
greet: {
    path: '/streaming.Greeter/Greet',
    requestStream: false,
    responseStream: false,
    requestType: greeter_pb.GreetingRequest,
    responseType: greeter_pb.GreetingResponse,
    requestSerialize: serialize_streaming_GreetingRequest,
    requestDeserialize: deserialize_streaming_GreetingRequest,
    responseSerialize: serialize_streaming_GreetingResponse,
    responseDeserialize: deserialize_streaming_GreetingResponse,
  },
  // Server streaming
greetManyTimes: {
    path: '/streaming.Greeter/GreetManyTimes',
    requestStream: false,
    responseStream: true,
    requestType: greeter_pb.GreetManyTimesRequest,
    responseType: greeter_pb.GreetManyTimesResponse,
    requestSerialize: serialize_streaming_GreetManyTimesRequest,
    requestDeserialize: deserialize_streaming_GreetManyTimesRequest,
    responseSerialize: serialize_streaming_GreetManyTimesResponse,
    responseDeserialize: deserialize_streaming_GreetManyTimesResponse,
  },
  // Client streaming
longGreet: {
    path: '/streaming.Greeter/LongGreet',
    requestStream: true,
    responseStream: false,
    requestType: greeter_pb.LongGreetRequest,
    responseType: greeter_pb.LongGreetResponse,
    requestSerialize: serialize_streaming_LongGreetRequest,
    requestDeserialize: deserialize_streaming_LongGreetRequest,
    responseSerialize: serialize_streaming_LongGreetResponse,
    responseDeserialize: deserialize_streaming_LongGreetResponse,
  },
  // Bidi streaming
greetEveryone: {
    path: '/streaming.Greeter/GreetEveryone',
    requestStream: true,
    responseStream: true,
    requestType: greeter_pb.GreetEveryoneRequest,
    responseType: greeter_pb.GreetEveryoneResponse,
    requestSerialize: serialize_streaming_GreetEveryoneRequest,
    requestDeserialize: deserialize_streaming_GreetEveryoneRequest,
    responseSerialize: serialize_streaming_GreetEveryoneResponse,
    responseDeserialize: deserialize_streaming_GreetEveryoneResponse,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
