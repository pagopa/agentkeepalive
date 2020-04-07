declare module "agentkeepalive" {
  import * as http from "http";
  import * as https from "https";

  interface AgentStatus {
    createSocketCount: number;
    createSocketErrorCount: number;
    closeSocketCount: number;
    errorSocketCount: number;
    timeoutSocketCount: number;
    requestCount: number;
    freeSockets: object;
    sockets: object;
    requests: object;
  }

  interface HttpOptions extends http.AgentOptions {
    keepAlive?: boolean;
    freeSocketTimeout?: number;
    freeSocketKeepAliveTimeout?: number;
    timeout?: number;
    socketActiveTTL?: number;
  }

  interface HttpsOptions extends https.AgentOptions {
    keepAlive?: boolean;
    freeSocketTimeout?: number;
    freeSocketKeepAliveTimeout?: number;
    timeout?: number;
    socketActiveTTL?: number;
  }

  export = HttpAgent;

  class HttpAgent extends http.Agent {
    constructor(opts?: HttpOptions);
    readonly statusChanged: boolean;
    createSocket(
      req: http.IncomingMessage,
      options: http.RequestOptions,
      cb: Function
    ): void;
    getCurrentStatus(): AgentStatus;
  }

  namespace HttpAgent {
    interface AgentStatus {
      createSocketCount: number;
      createSocketErrorCount: number;
      closeSocketCount: number;
      errorSocketCount: number;
      timeoutSocketCount: number;
      requestCount: number;
      freeSockets: object;
      sockets: object;
      requests: object;
    }

    interface HttpOptions extends http.AgentOptions {
      keepAlive?: boolean;
      freeSocketTimeout?: number;
      freeSocketKeepAliveTimeout?: number;
      timeout?: number;
      socketActiveTTL?: number;
    }

    interface HttpsOptions extends https.AgentOptions {
      keepAlive?: boolean;
      freeSocketTimeout?: number;
      freeSocketKeepAliveTimeout?: number;
      timeout?: number;
      socketActiveTTL?: number;
    }

    class HttpsAgent extends https.Agent {
      constructor(opts?: HttpsOptions);
      readonly statusChanged: boolean;
      createSocket(
        req: http.IncomingMessage,
        options: https.RequestOptions,
        cb: Function
      ): void;
      getCurrentStatus(): AgentStatus;
    }
  }
}
