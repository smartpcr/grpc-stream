// package: streaming.grpc
// file: story.proto

var story_pb = require("./story_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var News = (function () {
  function News() {}
  News.serviceName = "streaming.grpc.News";
  return News;
}());

News.ListStories = {
  methodName: "ListStories",
  service: News,
  requestStream: false,
  responseStream: true,
  requestType: story_pb.ListStoriesRequest,
  responseType: story_pb.ListStoriesResponse
};

exports.News = News;

function NewsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

NewsClient.prototype.listStories = function listStories(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(News.ListStories, {
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

exports.NewsClient = NewsClient;

