// package: streaming.grpc
// file: story.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as story_pb from "./story_pb";

interface INewsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listStories: INewsService_IListStories;
}

interface INewsService_IListStories extends grpc.MethodDefinition<story_pb.ListStoriesRequest, story_pb.ListStoriesResponse> {
    path: string; // "/streaming.grpc.News/ListStories"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<story_pb.ListStoriesRequest>;
    requestDeserialize: grpc.deserialize<story_pb.ListStoriesRequest>;
    responseSerialize: grpc.serialize<story_pb.ListStoriesResponse>;
    responseDeserialize: grpc.deserialize<story_pb.ListStoriesResponse>;
}

export const NewsService: INewsService;

export interface INewsServer {
    listStories: grpc.handleServerStreamingCall<story_pb.ListStoriesRequest, story_pb.ListStoriesResponse>;
}

export interface INewsClient {
    listStories(request: story_pb.ListStoriesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<story_pb.ListStoriesResponse>;
    listStories(request: story_pb.ListStoriesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<story_pb.ListStoriesResponse>;
}

export class NewsClient extends grpc.Client implements INewsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public listStories(request: story_pb.ListStoriesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<story_pb.ListStoriesResponse>;
    public listStories(request: story_pb.ListStoriesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<story_pb.ListStoriesResponse>;
}
