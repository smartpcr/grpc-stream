// package: streaming.grpc
// file: temperature.proto

var temperature_pb = require("./temperature_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var temperature = (function () {
  function temperature() {}
  temperature.serviceName = "streaming.grpc.temperature";
  return temperature;
}());

temperature.Read = {
  methodName: "Read",
  service: temperature,
  requestStream: false,
  responseStream: false,
  requestType: temperature_pb.ReadRequest,
  responseType: temperature_pb.ReadResponse
};

temperature.ReadStream = {
  methodName: "ReadStream",
  service: temperature,
  requestStream: false,
  responseStream: true,
  requestType: temperature_pb.ReadStreamRequest,
  responseType: temperature_pb.ReadStreamResponse
};

exports.temperature = temperature;

function temperatureClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

temperatureClient.prototype.read = function read(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(temperature.Read, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

temperatureClient.prototype.readStream = function readStream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(temperature.ReadStream, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.temperatureClient = temperatureClient;

