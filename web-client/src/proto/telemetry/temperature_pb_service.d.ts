// package: streaming.grpc
// file: temperature.proto

import * as temperature_pb from "./temperature_pb";
import {grpc} from "@improbable-eng/grpc-web";

type temperatureRead = {
  readonly methodName: string;
  readonly service: typeof temperature;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof temperature_pb.ReadRequest;
  readonly responseType: typeof temperature_pb.ReadResponse;
};

type temperatureReadStream = {
  readonly methodName: string;
  readonly service: typeof temperature;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof temperature_pb.ReadStreamRequest;
  readonly responseType: typeof temperature_pb.ReadStreamResponse;
};

export class temperature {
  static readonly serviceName: string;
  static readonly Read: temperatureRead;
  static readonly ReadStream: temperatureReadStream;
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

export class temperatureClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  read(
    requestMessage: temperature_pb.ReadRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: temperature_pb.ReadResponse|null) => void
  ): UnaryResponse;
  read(
    requestMessage: temperature_pb.ReadRequest,
    callback: (error: ServiceError|null, responseMessage: temperature_pb.ReadResponse|null) => void
  ): UnaryResponse;
  readStream(requestMessage: temperature_pb.ReadStreamRequest, metadata?: grpc.Metadata): ResponseStream<temperature_pb.ReadStreamResponse>;
}

