// package: streaming.grpc
// file: temperature.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as temperature_pb from "./temperature_pb";

interface ItemperatureService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    read: ItemperatureService_IRead;
    readStream: ItemperatureService_IReadStream;
}

interface ItemperatureService_IRead extends grpc.MethodDefinition<temperature_pb.ReadRequest, temperature_pb.ReadResponse> {
    path: string; // "/streaming.grpc.temperature/Read"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<temperature_pb.ReadRequest>;
    requestDeserialize: grpc.deserialize<temperature_pb.ReadRequest>;
    responseSerialize: grpc.serialize<temperature_pb.ReadResponse>;
    responseDeserialize: grpc.deserialize<temperature_pb.ReadResponse>;
}
interface ItemperatureService_IReadStream extends grpc.MethodDefinition<temperature_pb.ReadStreamRequest, temperature_pb.ReadStreamResponse> {
    path: string; // "/streaming.grpc.temperature/ReadStream"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<temperature_pb.ReadStreamRequest>;
    requestDeserialize: grpc.deserialize<temperature_pb.ReadStreamRequest>;
    responseSerialize: grpc.serialize<temperature_pb.ReadStreamResponse>;
    responseDeserialize: grpc.deserialize<temperature_pb.ReadStreamResponse>;
}

export const temperatureService: ItemperatureService;

export interface ItemperatureServer {
    read: grpc.handleUnaryCall<temperature_pb.ReadRequest, temperature_pb.ReadResponse>;
    readStream: grpc.handleServerStreamingCall<temperature_pb.ReadStreamRequest, temperature_pb.ReadStreamResponse>;
}

export interface ItemperatureClient {
    read(request: temperature_pb.ReadRequest, callback: (error: grpc.ServiceError | null, response: temperature_pb.ReadResponse) => void): grpc.ClientUnaryCall;
    read(request: temperature_pb.ReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: temperature_pb.ReadResponse) => void): grpc.ClientUnaryCall;
    read(request: temperature_pb.ReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: temperature_pb.ReadResponse) => void): grpc.ClientUnaryCall;
    readStream(request: temperature_pb.ReadStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<temperature_pb.ReadStreamResponse>;
    readStream(request: temperature_pb.ReadStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<temperature_pb.ReadStreamResponse>;
}

export class temperatureClient extends grpc.Client implements ItemperatureClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public read(request: temperature_pb.ReadRequest, callback: (error: grpc.ServiceError | null, response: temperature_pb.ReadResponse) => void): grpc.ClientUnaryCall;
    public read(request: temperature_pb.ReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: temperature_pb.ReadResponse) => void): grpc.ClientUnaryCall;
    public read(request: temperature_pb.ReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: temperature_pb.ReadResponse) => void): grpc.ClientUnaryCall;
    public readStream(request: temperature_pb.ReadStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<temperature_pb.ReadStreamResponse>;
    public readStream(request: temperature_pb.ReadStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<temperature_pb.ReadStreamResponse>;
}
