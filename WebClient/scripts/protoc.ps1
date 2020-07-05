$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$protoFolder = "./src/proto/greeter"
$nodeBinFolder = Join-Path "./node_modules" ".bin"
$grpcProtoc = Join-Path $nodeBinFolder "grpc_tools_node_protoc"
$grpcPlugin = Join-Path $nodeBinFolder "grpc_tools_node_protoc_plugin"
$grpcTs = Join-Path $nodeBinFolder "protoc-gen-ts"


$protocArgs = "$grpcProtoc --js_out=import_style=commonjs,binary:$protoFolder " +
"--grpc_out=$protoFolder " +
"--plugin=protoc-gen-grpc=$grpcPlugin " +
"-I $protoFolder " +
"$protoFolder/*.proto"
Write-Host $protocArgs
Invoke-Expression $protocArgs

$protocArgs = "$grpcProtoc " +
"--plugin=protoc-gen-ts=$grpcTs " +
"--ts_out=$protoFolder " +
"-I $protoFolder " +
"$protoFolder/*.proto"
Write-Host $protocArgs
Invoke-Expression $protocArgs