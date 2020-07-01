$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$rootFolder = if ($PSScriptRoot) { $PSScriptRoot } else { (Get-Location).Path }
while (-not (Test-Path (Join-Path $rootFolder "package.json"))) {
    $rootFolder = Split-Path $rootFolder -Parent
}
$protoFolder = Join-Path (Join-Path $rootFolder "src") "proto"
$nodeBinFolder = Join-Path (Join-Path $rootFolder "node_modules") ".bin"
$grpcProtoc = Join-Path $nodeBinFolder "grpc_tools_node_protoc"
$grpcPlugin = Join-Path $nodeBinFolder "grpc_tools_node_protoc_plugin"
$grpcTs = Join-Path $nodeBinFolder "protoc-gen-ts"

$protoFiles = [System.IO.Directory]::GetFiles($protoFolder, "*.proto", [System.IO.SearchOption]::AllDirectories)

$protoFiles | ForEach-Object {
  $protoFile = $_
  Write-Host "processing $protoFile..."

  $protocArgs = "$grpcProtoc --js_out=import_style=commonjs,binary:`"$protoFile`" " +
    "--grpc_out=`"$protoFile`" " +
    "--plugin=protoc-gen-grpc=`"$grpcPlugin`" " +
    "-I `"$protoFile`" " +
    "`"$protoFile`"/*.proto"
  Write-Host $protocArgs
  Invoke-Expression $protocArgs

  $protocArgs = "$grpcProtoc " +
    "--plugin=protoc-gen-ts=`"$grpcTs`" " +
    "--ts_out=`"$protoFile`" " +
    "-I `"$protoFile`" " +
    "`"$protoFile`"/*.proto"
  Write-Host $protocArgs
  Invoke-Expression $protocArgs
}
