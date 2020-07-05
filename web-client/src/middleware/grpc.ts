import { grpc } from "grpc-web-client";
import { Action, Middleware } from "redux";
import { ProtobufMessage } from "grpc-web-client/dist/typings/message";
import { TransportFactory } from "grpc-web-client/dist/typings/transports/Transport";

const GRPC_WEB_REQUEST = "GRPC_WEB_REQUEST";

export type GrpcActionPayload<
    RequestType extends ProtobufMessage,
    ResponseType extends ProtobufMessage
> = {
    methodDescriptor: grpc.MethodDefinition<RequestType, ResponseType>;
    transport?: TransportFactory;
    debug?: boolean;
    host: string;
    request: RequestType;
    metadata?: grpc.Metadata.ConstructorArg;
    onStart?: () => Action | void;
    onHeaders?: (headers: grpc.Metadata) => Action | void;
    onMessage?: (res: ResponseType) => Action | void;
    onEnd: (
        code: grpc.Code,
        message: string,
        trailers: grpc.Metadata
    ) => Action | void;
};

export type GrpcAction<
    RequestType extends ProtobufMessage,
    ResponseType extends ProtobufMessage
> = {
    type: typeof GRPC_WEB_REQUEST;
    payload: GrpcActionPayload<RequestType, ResponseType>;
};

export function grpcRequest<
    RequestType extends ProtobufMessage,
    ResponseType extends ProtobufMessage
>(
    payload: GrpcActionPayload<RequestType, ResponseType>
): GrpcAction<RequestType, ResponseType> {
    return {
        type: GRPC_WEB_REQUEST,
        payload,
    };
}

// tslint:disable-next-line: no-any
export const newGrpcMiddleware = (): Middleware => (store: any) => (next: any) => (action: any) => {
    // skip non-grpc actions
    if (!isGrpcWebUnaryAction(action)) {
        return next(action);
    }

    const payload = action.payload;

    if (payload.onStart) {
        payload.onStart();
    }

    grpc.invoke(payload.methodDescriptor, {
        debug: payload.debug,
        host: payload.host,
        request: payload.request,
        metadata: payload.metadata,
        transport: payload.transport,
        onHeaders: (headers) => {
            if (!payload.onHeaders) {
                return;
            }
            const actionToDispatch = payload.onHeaders(headers);
            return actionToDispatch && store.dispatch(actionToDispatch);
        },
        onMessage: (res) => {
            if (!payload.onMessage) {
                return;
            }
            const actionToDispatch = payload.onMessage(res);
            return actionToDispatch && store.dispatch(actionToDispatch);
        },
        onEnd: (code, msg, trailers) => {
            const actionToDispatch = payload.onEnd(code, msg, trailers);
            return actionToDispatch && store.dispatch(actionToDispatch);
        }
    });

    return next(action);
};

function isGrpcWebUnaryAction(
    // tslint:disable-next-line: no-any
    action: any
): action is GrpcAction<ProtobufMessage, ProtobufMessage> {
    return (
        action &&
        action.type &&
        action.type === GRPC_WEB_REQUEST &&
        isGrpcWebPayload(action)
    );
}

// tslint:disable-next-line: no-any
function isGrpcWebPayload(action: any): boolean {
    return (
        action &&
        action.payload &&
        action.payload.methodDescriptor &&
        action.payload.request &&
        action.payload.onEnd &&
        action.payload.host
    );
}
