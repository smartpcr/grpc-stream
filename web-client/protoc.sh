#!/usr/bin/env bash

GRPC_TOOLS_NODE_PROTOC="./node_modules/.bin/grpc_tools_node_protoc"
# GRPC_TOOLS_NODE_PROTOC="./node_modules/.bin/grpc_tools_node_protoc.cmd"
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
# PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts.cmd" # windows
GRPC_TOOLS_NODE_PROTOC_PLUGIN="./node_modules/.bin/grpc_tools_node_protoc_plugin"

PROTO_FOLDER="./src/proto/story"
${GRPC_TOOLS_NODE_PROTOC} \
  --js_out=import_style=commonjs,binary:"${PROTO_FOLDER}" \
  --grpc_out="${PROTO_FOLDER}" \
  --plugin=protoc-gen-grpc="${GRPC_TOOLS_NODE_PROTOC_PLUGIN}" \
  -I "${PROTO_FOLDER}" \
  "${PROTO_FOLDER}"/story.proto
${GRPC_TOOLS_NODE_PROTOC} \
  --plugin=protoc-gen-ts="${PROTOC_GEN_TS_PATH}" \
  --ts_out=service=true:"${PROTO_FOLDER}" \
  -I "${PROTO_FOLDER}" \
  "${PROTO_FOLDER}"/story.proto


PROTO_FOLDER="./src/proto/telemetry"
${GRPC_TOOLS_NODE_PROTOC} \
  --js_out=import_style=commonjs,binary:"${PROTO_FOLDER}" \
  --grpc_out="${PROTO_FOLDER}" \
  --plugin=protoc-gen-grpc="${GRPC_TOOLS_NODE_PROTOC_PLUGIN}" \
  -I "${PROTO_FOLDER}" \
  "${PROTO_FOLDER}"/story.proto
${GRPC_TOOLS_NODE_PROTOC} \
  --plugin=protoc-gen-ts="${PROTOC_GEN_TS_PATH}" \
  --ts_out=service=true:"${PROTO_FOLDER}" \
  -I "${PROTO_FOLDER}" \
  "${PROTO_FOLDER}"/story.proto
