// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var story_pb = require('./story_pb.js');

function serialize_streaming_grpc_ListStoriesRequest(arg) {
  if (!(arg instanceof story_pb.ListStoriesRequest)) {
    throw new Error('Expected argument of type streaming.grpc.ListStoriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_streaming_grpc_ListStoriesRequest(buffer_arg) {
  return story_pb.ListStoriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_streaming_grpc_ListStoriesResponse(arg) {
  if (!(arg instanceof story_pb.ListStoriesResponse)) {
    throw new Error('Expected argument of type streaming.grpc.ListStoriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_streaming_grpc_ListStoriesResponse(buffer_arg) {
  return story_pb.ListStoriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var NewsService = exports.NewsService = {
  listStories: {
    path: '/streaming.grpc.News/ListStories',
    requestStream: false,
    responseStream: true,
    requestType: story_pb.ListStoriesRequest,
    responseType: story_pb.ListStoriesResponse,
    requestSerialize: serialize_streaming_grpc_ListStoriesRequest,
    requestDeserialize: deserialize_streaming_grpc_ListStoriesRequest,
    responseSerialize: serialize_streaming_grpc_ListStoriesResponse,
    responseDeserialize: deserialize_streaming_grpc_ListStoriesResponse,
  },
};

exports.NewsClient = grpc.makeGenericClientConstructor(NewsService);
