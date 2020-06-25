
#Inspired from: https://github.com/gbahamondezc/node-grpc-ssl/blob/master/scripts/gen_certs.sh
# Output files
# ca.key: Certificate Authority private key file (this shouldn't be shared in real-life)
# ca.crt: Certificate Authority trust certificate (this should be shared with users in real-life)
# server.key: Server private key, password protected (this shouldn't be shared)
# server.csr: Server certificate signing request (this should be shared with the CA owner)
# server.crt: Server certificate signed by the CA (this would be sent back by the CA owner) - keep on server
# Summary 
# Private files: ca.key, server.key, server.pem (We don't need this, in our case), server.crt
# "Share" files: ca.crt (needed by the client), server.csr (needed by the CA)

echo "Creating certs folder ..."
mkdir certs && cd certs

echo "Generating certificates ..."
CN_SERVER="*.default.svc.cluster.local"
CN_CLIENT="*.default.svc.cluster.local"
PASS_PHRASE="P@ssw0rd"

openssl genrsa -passout pass:$PASS_PHRASE -des3 -out ca.key 4096

openssl req -passin pass:$PASS_PHRASE -new -x509 -days 365 -key ca.key -out ca.crt -subj  "/C=US/ST=WA/L=Seattle/O=Test/OU=Test/CN=ca"

openssl genrsa -passout pass:$PASS_PHRASE -des3 -out server.key 4096

openssl req -passin pass:$PASS_PHRASE -new -key server.key -out server.csr -subj  "/C=US/ST=WA/L=Seattle/O=Test/OU=Server/CN=$CN_SERVER"

openssl x509 -req -passin pass:$PASS_PHRASE -days 365 -in server.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out server.crt

openssl rsa -passin pass:$PASS_PHRASE -in server.key -out server.key

openssl genrsa -passout pass:$PASS_PHRASE -des3 -out client.key 4096

openssl req -passin pass:$PASS_PHRASE -new -key client.key -out client.csr -subj  "/C=US/ST=WA/L=Seattle/O=Test/OU=Client/CN=$CN_CLIENT"

openssl x509 -passin pass:$PASS_PHRASE -req -days 365 -in client.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out client.crt

openssl rsa -passin pass:$PASS_PHRASE -in client.key -out client.key

az keyvault secret set --vault-name xd-dev-kv --name ca-datacenterhealth-io-crt --file ./certs/ca.crt
az keyvault secret set --vault-name xd-dev-kv --name streams-datacenterhealth-io-crt --file ./certs/server.crt
az keyvault secret set --vault-name xd-dev-kv --name streams-datacenterhealth-io-key --file ./certs/server.key
az keyvault secret set --vault-name xd-dev-kv --name web-datacenterhealth-io-crt --file ./certs/client.crt
az keyvault secret set --vault-name xd-dev-kv --name web-datacenterhealth-io-key --file ./certs/client.key