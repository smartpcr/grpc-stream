import * as grpc from "grpc";
import * as fs from "fs";

import { GreetManyTimesRequest, GreetManyTimesResponse, Greeting } from "../proto/greeter/greeter_pb";
import { GreeterClient } from "../proto/greeter/greeter_grpc_pb";

export module GreeterHandler {
    // certs copied to home folder on local dev, and mounted to /secrets folder in docker
    const credentials = grpc.credentials.createSsl(
        fs.readFileSync("~/.certs/stream-client/ca.datacenterhealth.io.crt"),
        fs.readFileSync("~/.certs/stream-client/web.datacenterhealth.io.key"),
        fs.readFileSync("~/.certs/stream-client/web.datacenterhealth.io.crt")
    );
    const client: GreeterClient = new GreeterClient(
        `localhost.default.svc.cluster.local:5003`,
        credentials
    );

    export function callGreetManyTimes() {
        const request: GreetManyTimesRequest = new GreetManyTimesRequest();
        const greeting: Greeting = new Greeting();
        greeting.setFirstName("xd");
        greeting.setLastName("li");
        request.setGreeting(greeting);
        const call = client.greetManyTimes(request);

        call.on("data", (response: GreetManyTimesResponse) => {
            console.log(`Client streaming response: ${response.getResult()}`);
        });

        call.on("error", (error: Error) => {
            console.error(error);
        });

        call.on("end", () => {
            console.log("Streaming ended!");
        });
    }
}
