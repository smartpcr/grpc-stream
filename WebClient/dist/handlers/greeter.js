"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreeterHandler = void 0;
const grpc = __importStar(require("grpc"));
const fs = __importStar(require("fs"));
const greeter_pb_1 = require("../proto/greeter/greeter_pb");
const greeter_grpc_pb_1 = require("../proto/greeter/greeter_grpc_pb");
var GreeterHandler;
(function (GreeterHandler) {
    // certs copied to home folder on local dev, and mounted to /secrets folder in docker
    const credentials = grpc.credentials.createSsl(fs.readFileSync("~/.certs/stream-client/ca.datacenterhealth.io.crt"), fs.readFileSync("~/.certs/stream-client/web.datacenterhealth.io.key"), fs.readFileSync("~/.certs/stream-client/web.datacenterhealth.io.crt"));
    const client = new greeter_grpc_pb_1.GreeterClient(`localhost.default.svc.cluster.local:5003`, credentials);
    function callGreetManyTimes() {
        const request = new greeter_pb_1.GreetManyTimesRequest();
        const greeting = new greeter_pb_1.Greeting();
        greeting.setFirstName("xd");
        greeting.setLastName("li");
        request.setGreeting(greeting);
        const call = client.greetManyTimes(request);
        call.on("data", (response) => {
            console.log(`Client streaming response: ${response.getResult()}`);
        });
        call.on("error", (error) => {
            console.error(error);
        });
        call.on("end", () => {
            console.log("Streaming ended!");
        });
    }
    GreeterHandler.callGreetManyTimes = callGreetManyTimes;
})(GreeterHandler = exports.GreeterHandler || (exports.GreeterHandler = {}));
//# sourceMappingURL=greeter.js.map