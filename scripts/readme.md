## CN for mTLS
server cert and client cert are generated using wildcard CN=*.default.svc.cluster.local
make sure to modify host file and add localhost.default.svc.cluster.local

## SSL
I used 2 ssl certs, one for REST API on port 5002, and one for GRPC server on port 5003
