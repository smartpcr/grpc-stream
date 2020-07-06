// package: streaming.grpc
// file: greeter.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as greeter_pb from "./greeter_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    greet: IGreeterService_IGreet;
    greetManyTimes: IGreeterService_IGreetManyTimes;
    longGreet: IGreeterService_ILongGreet;
    greetEveryone: IGreeterService_IGreetEveryone;
}

interface IGreeterService_IGreet extends grpc.MethodDefinition<greeter_pb.GreetingRequest, greeter_pb.GreetingResponse> {
    path: string; // "/streaming.grpc.Greeter/Greet"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<greeter_pb.GreetingRequest>;
    requestDeserialize: grpc.deserialize<greeter_pb.GreetingRequest>;
    responseSerialize: grpc.serialize<greeter_pb.GreetingResponse>;
    responseDeserialize: grpc.deserialize<greeter_pb.GreetingResponse>;
}
interface IGreeterService_IGreetManyTimes extends grpc.MethodDefinition<greeter_pb.GreetManyTimesRequest, greeter_pb.GreetManyTimesResponse> {
    path: string; // "/streaming.grpc.Greeter/GreetManyTimes"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<greeter_pb.GreetManyTimesRequest>;
    requestDeserialize: grpc.deserialize<greeter_pb.GreetManyTimesRequest>;
    responseSerialize: grpc.serialize<greeter_pb.GreetManyTimesResponse>;
    responseDeserialize: grpc.deserialize<greeter_pb.GreetManyTimesResponse>;
}
interface IGreeterService_ILongGreet extends grpc.MethodDefinition<greeter_pb.LongGreetRequest, greeter_pb.LongGreetResponse> {
    path: string; // "/streaming.grpc.Greeter/LongGreet"
    requestStream: boolean; // true
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<greeter_pb.LongGreetRequest>;
    requestDeserialize: grpc.deserialize<greeter_pb.LongGreetRequest>;
    responseSerialize: grpc.serialize<greeter_pb.LongGreetResponse>;
    responseDeserialize: grpc.deserialize<greeter_pb.LongGreetResponse>;
}
interface IGreeterService_IGreetEveryone extends grpc.MethodDefinition<greeter_pb.GreetEveryoneRequest, greeter_pb.GreetEveryoneResponse> {
    path: string; // "/streaming.grpc.Greeter/GreetEveryone"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<greeter_pb.GreetEveryoneRequest>;
    requestDeserialize: grpc.deserialize<greeter_pb.GreetEveryoneRequest>;
    responseSerialize: grpc.serialize<greeter_pb.GreetEveryoneResponse>;
    responseDeserialize: grpc.deserialize<greeter_pb.GreetEveryoneResponse>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer {
    greet: grpc.handleUnaryCall<greeter_pb.GreetingRequest, greeter_pb.GreetingResponse>;
    greetManyTimes: grpc.handleServerStreamingCall<greeter_pb.GreetManyTimesRequest, greeter_pb.GreetManyTimesResponse>;
    longGreet: grpc.handleClientStreamingCall<greeter_pb.LongGreetRequest, greeter_pb.LongGreetResponse>;
    greetEveryone: grpc.handleBidiStreamingCall<greeter_pb.GreetEveryoneRequest, greeter_pb.GreetEveryoneResponse>;
}

export interface IGreeterClient {
    greet(request: greeter_pb.GreetingRequest, callback: (error: grpc.ServiceError | null, response: greeter_pb.GreetingResponse) => void): grpc.ClientUnaryCall;
    greet(request: greeter_pb.GreetingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greeter_pb.GreetingResponse) => void): grpc.ClientUnaryCall;
    greet(request: greeter_pb.GreetingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeter_pb.GreetingResponse) => void): grpc.ClientUnaryCall;
    greetManyTimes(request: greeter_pb.GreetManyTimesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<greeter_pb.GreetManyTimesResponse>;
    greetManyTimes(request: greeter_pb.GreetManyTimesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<greeter_pb.GreetManyTimesResponse>;
    longGreet(callback: (error: grpc.ServiceError | null, response: greeter_pb.LongGreetResponse) => void): grpc.ClientWritableStream<greeter_pb.LongGreetRequest>;
    longGreet(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greeter_pb.LongGreetResponse) => void): grpc.ClientWritableStream<greeter_pb.LongGreetRequest>;
    longGreet(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeter_pb.LongGreetResponse) => void): grpc.ClientWritableStream<greeter_pb.LongGreetRequest>;
    longGreet(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeter_pb.LongGreetResponse) => void): grpc.ClientWritableStream<greeter_pb.LongGreetRequest>;
    greetEveryone(): grpc.ClientDuplexStream<greeter_pb.GreetEveryoneRequest, greeter_pb.GreetEveryoneResponse>;
    greetEveryone(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<greeter_pb.GreetEveryoneRequest, greeter_pb.GreetEveryoneResponse>;
    greetEveryone(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<greeter_pb.GreetEveryoneRequest, greeter_pb.GreetEveryoneResponse>;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public greet(request: greeter_pb.GreetingRequest, callback: (error: grpc.ServiceError | null, response: greeter_pb.GreetingResponse) => void): grpc.ClientUnaryCall;
    public greet(request: greeter_pb.GreetingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greeter_pb.GreetingResponse) => void): grpc.ClientUnaryCall;
    public greet(request: greeter_pb.GreetingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeter_pb.GreetingResponse) => void): grpc.ClientUnaryCall;
    public greetManyTimes(request: greeter_pb.GreetManyTimesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<greeter_pb.GreetManyTimesResponse>;
    public greetManyTimes(request: greeter_pb.GreetManyTimesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<greeter_pb.GreetManyTimesResponse>;
    public longGreet(callback: (error: grpc.ServiceError | null, response: greeter_pb.LongGreetResponse) => void): grpc.ClientWritableStream<greeter_pb.LongGreetRequest>;
    public longGreet(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greeter_pb.LongGreetResponse) => void): grpc.ClientWritableStream<greeter_pb.LongGreetRequest>;
    public longGreet(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeter_pb.LongGreetResponse) => void): grpc.ClientWritableStream<greeter_pb.LongGreetRequest>;
    public longGreet(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeter_pb.LongGreetResponse) => void): grpc.ClientWritableStream<greeter_pb.LongGreetRequest>;
    public greetEveryone(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<greeter_pb.GreetEveryoneRequest, greeter_pb.GreetEveryoneResponse>;
    public greetEveryone(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<greeter_pb.GreetEveryoneRequest, greeter_pb.GreetEveryoneResponse>;
}
