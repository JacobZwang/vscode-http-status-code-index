const statuses = [
  {
    code: "100",
    phrase: "Continue",
    description:
      "indicates that the initial part of a request has been received and has not yet been rejected by the server.",
  },
  {
    code: "101",
    phrase: "Switching Protocols",
    description: `"indicates that the server understands and is willing to comply with the clients request, via the Upgrade header field, for a change in the application protocol being used on this connection."`,
  },
  {
    code: "200",
    phrase: "OK",
    description: "indicates that the request has succeeded.",
  },
  {
    code: "201",
    phrase: "Created",
    description:
      "indicates that the request has been fulfilled and has resulted in one or more new resources being created.",
  },
  {
    code: "202",
    phrase: "Accepted",
    description:
      "indicates that the request has been accepted for processing, but the processing has not been completed.",
  },
  {
    code: "203",
    phrase: "Non-Authoritative Information",
    description: `"indicates that the request was successful but the enclosed payload has been modified from that of the origin servers 200 (OK) response by a transforming proxy."`,
  },
  {
    code: "204",
    phrase: "No Content",
    description:
      "indicates that the server has successfully fulfilled the request and that there is no additional content to send in the response payload body.",
  },
  {
    code: "205",
    phrase: "Reset Content",
    description:
      "indicates that the server has fulfilled the request and desires that the user agent reset the 'document view', which caused the request to be sent, to its original state as received from the origin server.",
  },
  {
    code: "206",
    phrase: "Partial Content",
    description: `"indicates that the server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requestss Range header field."`,
  },
  {
    code: "300",
    phrase: "Multiple Choices",
    description:
      "indicates that the target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers.",
  },
  {
    code: "301",
    phrase: "Moved Permanently",
    description:
      "indicates that the target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.",
  },
  {
    code: "302",
    phrase: "Found",
    description:
      "indicates that the target resource resides temporarily under a different URI.",
  },
  {
    code: "303",
    phrase: "See Other",
    description:
      "indicates that the server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request.",
  },
  {
    code: "304",
    phrase: "Not Modified",
    description:
      "indicates that a conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false.",
  },
  { code: "305", phrase: "Use Proxy", description: "*deprecated*" },
  {
    code: "307",
    phrase: "Temporary Redirect",
    description:
      "indicates that the target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.",
  },
  {
    code: "400",
    phrase: "Bad Request",
    description:
      "indicates that the server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process.",
  },
  {
    code: "401",
    phrase: "Unauthorized",
    description:
      "indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.",
  },
  {
    code: "402",
    phrase: "Payment Required",
    description: "*reserved*",
  },
  {
    code: "403",
    phrase: "Forbidden",
    description:
      "indicates that the server understood the request but refuses to authorize it.",
  },
  {
    code: "404",
    phrase: "Not Found",
    description:
      "indicates that the origin server did not find a current representation for the target resource or is not willing to disclose that one exists.",
  },
  {
    code: "405",
    phrase: "Method Not Allowed",
    description:
      "indicates that the method specified in the request-line is known by the origin server but not supported by the target resource.",
  },
  {
    code: "406",
    phrase: "Not Acceptable",
    description:
      "indicates that the target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.",
  },
  {
    code: "407",
    phrase: "Proxy Authentication Required",
    description:
      "is similar to 401 (Unauthorized), but indicates that the client needs to authenticate itself in order to use a proxy.",
  },
  {
    code: "408",
    phrase: "Request Timeout",
    description:
      "indicates that the server did not receive a complete request message within the time that it was prepared to wait.",
  },
  {
    code: "409",
    phrase: "Conflict",
    description:
      "indicates that the request could not be completed due to a conflict with the current state of the resource.",
  },
  {
    code: "410",
    phrase: "Gone",
    description:
      "indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.",
  },
  {
    code: "411",
    phrase: "Length Required",
    description:
      "indicates that the server refuses to accept the request without a defined Content-Length.",
  },
  {
    code: "412",
    phrase: "Precondition Failed",
    description:
      "indicates that one or more preconditions given in the request header fields evaluated to false when tested on the server.",
  },
  {
    code: "413",
    phrase: "Payload Too Large",
    description:
      "indicates that the server is refusing to process a request because the request payload is larger than the server is willing or able to process.",
  },
  {
    code: "414",
    phrase: "URI Too Long",
    description:
      "indicates that the server is refusing to service the request because the request-target is longer than the server is willing to interpret.",
  },
  {
    code: "415",
    phrase: "Unsupported Media Type",
    description:
      "indicates that the origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method.",
  },
  {
    code: "416",
    phrase: "Range Not Satisfiable",
    description: `"indicates that none of the ranges in the requests Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges."`,
  },
  {
    code: "417",
    phrase: "Expectation Failed",
    description: `"indicates that the expectation given in the requests Expect header field could not be met by at least one of the inbound servers."`,
  },
  {
    code: "418",
    phrase: "Im a teapot",
    description: `"Any attempt to brew coffee with a teapot should result in the error code 418 Im a teapot."`,
  },
  {
    code: "426",
    phrase: "Upgrade Required",
    description:
      "indicates that the server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.",
  },
  {
    code: "500",
    phrase: "Internal Server Error",
    description:
      "indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.",
  },
  {
    code: "501",
    phrase: "Not Implemented",
    description:
      "indicates that the server does not support the functionality required to fulfill the request.",
  },
  {
    code: "502",
    phrase: "Bad Gateway",
    description:
      "indicates that the server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.",
  },
  {
    code: "503",
    phrase: "Service Unavailable",
    description:
      "indicates that the server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.",
  },
  {
    code: "504",
    phrase: "Gateway Time-out",
    description:
      "indicates that the server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.",
  },
  {
    code: "505",
    phrase: "HTTP Version Not Supported",
    description:
      "indicates that the server does not support, or refuses to support, the protocol version that was used in the request message.",
  },
  {
    code: "102",
    phrase: "Processing",
    description:
      "is an interim response used to inform the client that the server has accepted the complete request, but has not yet completed it.",
  },
  {
    code: "207",
    phrase: "Multi-Status",
    description: "provides status for multiple independent operations.",
  },
  {
    code: "226",
    phrase: "IM Used",
    description:
      "The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.",
  },
  {
    code: "308",
    phrase: "Permanent Redirect",
    description:
      "The target resource has been assigned a new permanent URI and any future references to this resource outght to use one of the enclosed URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET.",
  },
  {
    code: "422",
    phrase: "Unprocessable Entity",
    description:
      "means the server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions.",
  },
  {
    code: "423",
    phrase: "Locked",
    description:
      "means the source or destination resource of a method is locked.",
  },
  {
    code: "424",
    phrase: "Failed Dependency",
    description:
      "means that the method could not be performed on the resource because the requested action depended on another action and that action failed.",
  },
  {
    code: "428",
    phrase: "Precondition Required",
    description:
      "indicates that the origin server requires the request to be conditional.",
  },
  {
    code: "429",
    phrase: "Too Many Requests",
    description:
      "indicates that the user has sent too many requests in a given amount of time (rate limiting).",
  },
  {
    code: "431",
    phrase: "Request Header Fields Too Large",
    description:
      "indicates that the server is unwilling to process the request because its header fields are too large.",
  },
  {
    code: "506",
    phrase: "Variant Also Negotiates",
    description:
      "indicates that the server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.",
  },
  {
    code: "507",
    phrase: "Insufficient Storage",
    description:
      "means the method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.",
  },
  {
    code: "511",
    phrase: "Network Authentication Required",
    description:
      "indicates that the client needs to authenticate to gain network access.",
  },
];

export default statuses;
