// package: streaming.grpc
// file: story.proto

import * as story_pb from "./story_pb";
import {grpc} from "@improbable-eng/grpc-web";

type NewsListStories = {
  readonly methodName: string;
  readonly service: typeof News;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof story_pb.ListStoriesRequest;
  readonly responseType: typeof story_pb.ListStoriesResponse;
};

export class News {
  static readonly serviceName: string;
  static readonly ListStories: NewsListStories;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class NewsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listStories(requestMessage: story_pb.ListStoriesRequest, metadata?: grpc.Metadata): ResponseStream<story_pb.ListStoriesResponse>;
}

