// package: streaming.grpc
// file: temperature.proto

import * as jspb from "google-protobuf";

export class ReadRequest extends jspb.Message {
  getRoom(): string;
  setRoom(value: string): void;

  getFloor(): string;
  setFloor(value: string): void;

  getBuilding(): string;
  setBuilding(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadRequest): ReadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadRequest;
  static deserializeBinaryFromReader(message: ReadRequest, reader: jspb.BinaryReader): ReadRequest;
}

export namespace ReadRequest {
  export type AsObject = {
    room: string,
    floor: string,
    building: string,
  }
}

export class ReadResponse extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadResponse): ReadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadResponse;
  static deserializeBinaryFromReader(message: ReadResponse, reader: jspb.BinaryReader): ReadResponse;
}

export namespace ReadResponse {
  export type AsObject = {
    value: number,
  }
}

export class ReadStreamRequest extends jspb.Message {
  getRoom(): string;
  setRoom(value: string): void;

  getFloor(): string;
  setFloor(value: string): void;

  getBuilding(): string;
  setBuilding(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadStreamRequest): ReadStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadStreamRequest;
  static deserializeBinaryFromReader(message: ReadStreamRequest, reader: jspb.BinaryReader): ReadStreamRequest;
}

export namespace ReadStreamRequest {
  export type AsObject = {
    room: string,
    floor: string,
    building: string,
  }
}

export class ReadStreamResponse extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadStreamResponse): ReadStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadStreamResponse;
  static deserializeBinaryFromReader(message: ReadStreamResponse, reader: jspb.BinaryReader): ReadStreamResponse;
}

export namespace ReadStreamResponse {
  export type AsObject = {
    index: number,
    timestamp: number,
    value: number,
  }
}

