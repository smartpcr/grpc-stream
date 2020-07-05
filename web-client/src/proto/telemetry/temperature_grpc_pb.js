// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var temperature_pb = require('./temperature_pb.js');

function serialize_streaming_grpc_ReadRequest(arg) {
  if (!(arg instanceof temperature_pb.ReadRequest)) {
    throw new Error('Expected argument of type streaming.grpc.ReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_streaming_grpc_ReadRequest(buffer_arg) {
  return temperature_pb.ReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_streaming_grpc_ReadResponse(arg) {
  if (!(arg instanceof temperature_pb.ReadResponse)) {
    throw new Error('Expected argument of type streaming.grpc.ReadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_streaming_grpc_ReadResponse(buffer_arg) {
  return temperature_pb.ReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_streaming_grpc_ReadStreamRequest(arg) {
  if (!(arg instanceof temperature_pb.ReadStreamRequest)) {
    throw new Error('Expected argument of type streaming.grpc.ReadStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_streaming_grpc_ReadStreamRequest(buffer_arg) {
  return temperature_pb.ReadStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_streaming_grpc_ReadStreamResponse(arg) {
  if (!(arg instanceof temperature_pb.ReadStreamResponse)) {
    throw new Error('Expected argument of type streaming.grpc.ReadStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_streaming_grpc_ReadStreamResponse(buffer_arg) {
  return temperature_pb.ReadStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var temperatureService = exports.temperatureService = {
  read: {
    path: '/streaming.grpc.temperature/Read',
    requestStream: false,
    responseStream: false,
    requestType: temperature_pb.ReadRequest,
    responseType: temperature_pb.ReadResponse,
    requestSerialize: serialize_streaming_grpc_ReadRequest,
    requestDeserialize: deserialize_streaming_grpc_ReadRequest,
    responseSerialize: serialize_streaming_grpc_ReadResponse,
    responseDeserialize: deserialize_streaming_grpc_ReadResponse,
  },
  readStream: {
    path: '/streaming.grpc.temperature/ReadStream',
    requestStream: false,
    responseStream: true,
    requestType: temperature_pb.ReadStreamRequest,
    responseType: temperature_pb.ReadStreamResponse,
    requestSerialize: serialize_streaming_grpc_ReadStreamRequest,
    requestDeserialize: deserialize_streaming_grpc_ReadStreamRequest,
    responseSerialize: serialize_streaming_grpc_ReadStreamResponse,
    responseDeserialize: deserialize_streaming_grpc_ReadStreamResponse,
  },
};

exports.temperatureClient = grpc.makeGenericClientConstructor(temperatureService);
