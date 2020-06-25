// package: streaming
// file: greeter.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Greeting extends jspb.Message { 
    getFirstName(): string;
    setFirstName(value: string): Greeting;

    getLastName(): string;
    setLastName(value: string): Greeting;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Greeting.AsObject;
    static toObject(includeInstance: boolean, msg: Greeting): Greeting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Greeting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Greeting;
    static deserializeBinaryFromReader(message: Greeting, reader: jspb.BinaryReader): Greeting;
}

export namespace Greeting {
    export type AsObject = {
        firstName: string,
        lastName: string,
    }
}

export class GreetingRequest extends jspb.Message { 

    hasGreeting(): boolean;
    clearGreeting(): void;
    getGreeting(): Greeting | undefined;
    setGreeting(value?: Greeting): GreetingRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GreetingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GreetingRequest): GreetingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GreetingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GreetingRequest;
    static deserializeBinaryFromReader(message: GreetingRequest, reader: jspb.BinaryReader): GreetingRequest;
}

export namespace GreetingRequest {
    export type AsObject = {
        greeting?: Greeting.AsObject,
    }
}

export class GreetingResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): GreetingResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GreetingResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GreetingResponse): GreetingResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GreetingResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GreetingResponse;
    static deserializeBinaryFromReader(message: GreetingResponse, reader: jspb.BinaryReader): GreetingResponse;
}

export namespace GreetingResponse {
    export type AsObject = {
        result: string,
    }
}

export class GreetManyTimesRequest extends jspb.Message { 

    hasGreeting(): boolean;
    clearGreeting(): void;
    getGreeting(): Greeting | undefined;
    setGreeting(value?: Greeting): GreetManyTimesRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GreetManyTimesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GreetManyTimesRequest): GreetManyTimesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GreetManyTimesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GreetManyTimesRequest;
    static deserializeBinaryFromReader(message: GreetManyTimesRequest, reader: jspb.BinaryReader): GreetManyTimesRequest;
}

export namespace GreetManyTimesRequest {
    export type AsObject = {
        greeting?: Greeting.AsObject,
    }
}

export class GreetManyTimesResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): GreetManyTimesResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GreetManyTimesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GreetManyTimesResponse): GreetManyTimesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GreetManyTimesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GreetManyTimesResponse;
    static deserializeBinaryFromReader(message: GreetManyTimesResponse, reader: jspb.BinaryReader): GreetManyTimesResponse;
}

export namespace GreetManyTimesResponse {
    export type AsObject = {
        result: string,
    }
}

export class LongGreetRequest extends jspb.Message { 

    hasGreeting(): boolean;
    clearGreeting(): void;
    getGreeting(): Greeting | undefined;
    setGreeting(value?: Greeting): LongGreetRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LongGreetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LongGreetRequest): LongGreetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LongGreetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LongGreetRequest;
    static deserializeBinaryFromReader(message: LongGreetRequest, reader: jspb.BinaryReader): LongGreetRequest;
}

export namespace LongGreetRequest {
    export type AsObject = {
        greeting?: Greeting.AsObject,
    }
}

export class LongGreetResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): LongGreetResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LongGreetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LongGreetResponse): LongGreetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LongGreetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LongGreetResponse;
    static deserializeBinaryFromReader(message: LongGreetResponse, reader: jspb.BinaryReader): LongGreetResponse;
}

export namespace LongGreetResponse {
    export type AsObject = {
        result: string,
    }
}

export class GreetEveryoneRequest extends jspb.Message { 

    hasGreeting(): boolean;
    clearGreeting(): void;
    getGreeting(): Greeting | undefined;
    setGreeting(value?: Greeting): GreetEveryoneRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GreetEveryoneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GreetEveryoneRequest): GreetEveryoneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GreetEveryoneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GreetEveryoneRequest;
    static deserializeBinaryFromReader(message: GreetEveryoneRequest, reader: jspb.BinaryReader): GreetEveryoneRequest;
}

export namespace GreetEveryoneRequest {
    export type AsObject = {
        greeting?: Greeting.AsObject,
    }
}

export class GreetEveryoneResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): GreetEveryoneResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GreetEveryoneResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GreetEveryoneResponse): GreetEveryoneResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GreetEveryoneResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GreetEveryoneResponse;
    static deserializeBinaryFromReader(message: GreetEveryoneResponse, reader: jspb.BinaryReader): GreetEveryoneResponse;
}

export namespace GreetEveryoneResponse {
    export type AsObject = {
        result: string,
    }
}
