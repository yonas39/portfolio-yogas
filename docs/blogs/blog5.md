---
  title: "Blog 5: Response to a Blog post"
  layout: doc
---

## Why Use HTTP Status Codes: A Detailed Response with Examples

### Introduction

Why use HTTP status codes instead of simple error messages like { msg: "Very Important Error Made"} highlights the importance of following web standards and conventions when building APIs. Although technically both approaches communicate that "something went wrong," HTTP status codes offer several advantages, especially when designing robust, scalable, and maintainable systems. This response will walk through the purpose of HTTP codes, provide examples of their proper usage, and highlight practical benefits beyond just convention.

### Purpose of HTTP Status Codes: Context and Clarity

HTTP status codes are integral to RESTful APIs because they provide ** structured feedback ** about the result of a client's request. Instead of forcing a frontend or another system to parse strings to understand an error, a ** standardized code ** in the HTTP response allows systems to understand and respond to the issue efficiently.
Example:
Imagine two different responses to an API request that tried to retrieve a user's friend list but failed because the user wasn't found:
Without HTTP codes:
`{ "msg": "User not found" }`
With HTTP status codes (404 - Not Found):
Response header: HTTP/1.1 404 Not Found
Response body:
`{"error": "User not found"}`
In the first example, the front end must extract and parse the  "User not found" string to determine the error type. The second example, however, enables the front end to quickly recognize a **404 error** through a standard status code, avoiding unnecessary string operations and clarifying the issue at a glance.

### Efficiency and Simplicity: Integer Codes vs. Strings

Status codes are designed to be lightweight and easy to process. As you mentioned [here](https://mpadilla198.github.io/portfolio-miguel-padilla/blogs/blog1.html), this design choice stems from the origins of HTTP when **low memory** and **limited computational resources** were common constraints. Even today, comparing an integer like 404 is faster than parsing and interpreting "User not found" across multiple systems.
Using status codes simplifies debugging and logging too loggers can categorize requests by **error classes (4xx or 5xx)**, aiding system monitoring.
Example:
Imagine logging every error response:
Without status codes
`[ERROR] 14:32:56 - User retrieval failed: User not found`
With status codes:
`[ERROR] 14:32:56 - 404 Not Found`
The second format is more concise and standardized, making it easier to aggregate and analyze errors.

### Expressive Status Codes Provide Granular Information

Beyond success and failure, HTTP codes offer **granularity**. This allows for richer communication between the client and Server, leading to better user experiences. For instance:
**201 (Created)**: When a new resource is successfully created (e.g., a new user is added).
**204 (No Content)**: When an update is successful, but no further data is returned.
**429 (Too Many Requests)**: When rate-limiting is enforced, preventing abuse.
Without these nuanced status codes, your API would likely just respond with generic **200 OK** or **500 Internal Server Error**, providing less context.
Example:
If your API enforces rate limits and simply returns 200 OK with the message "You are making too many requests," the front must parse that message to understand the situation. With status codes:
Header: HTTP/1.1 429 Too Many Requests
Body:
`{"error": "Rate limit exceeded ", "retry_after": 60 }`
This approach provides clarity and enables the client to automate retries based on the "retry_after" field.

### Following Standards Benefits API Consumers

Using standard HTTP codes becomes essential when building APIs intended for broader use (e.g., public APIs). If you respond with **non-standard codes** or vague messages, developers integrating your API will have difficulty building reliable systems. Following convention also means your API becomes **predictable and easier to integrate** with tools like Postman or third-party libraries. I am currently working on a project that involves Informatica's REST API, which is quite inconsistent and unpredictable. The vague API messages make it difficult to resolve issues by relying solely on the documentation.
Example:
Imagine if your API returned 418 (I'm a Teapot) for every error. While it may seem funny, developers relying on your API would be frustrated since the code provides no meaningful information about what went wrong.
Best Practices for Specific Scenarios
Client Errors (4xx):
403 Forbidden: Used when the user lacks permission (e.g., AlreadyFriendsError in your example).

`export class AlreadyFriendsError extends NotAllowedError {
			    public static readonly HTTP_CODE = 403;
			    constructor(user1: ObjectId, user2: ObjectId) {
			       super("{0} and {1} are already friends!", user1, user2);
				}
			}`
Example Response:
`{ "error": "User1 and User2 are already friends" }`
Frontend handling: Can immediately detect that the user cannot proceed with the action due to permissions.
Server Errors (5xx):
503 Service Unavailable: Indicates that the Server is temporarily unavailable (e.g., for maintenance). Including a Retry-After header helps the client handle the situation gracefully.
``HTTP/1.1 503 Service Unavailable
  Retry-After: 120`
Example Response:
` {"error": "Server is under maintenance. Try again in 2 minutes."}`
Success Responses (2xx):
204 No Content: Useful when a PATCH request is successful, but no additional information needs to be returned.
`HTTP/1.1 204 No Content`
Avoiding Non-Standard Status Codes
Although it's technically possible to create custom status codes, such as using 418 (I'm a Teapot) in the AllErrorsexample, it sacrifices ** compatibility and clarity **. Non-standard codes or unusual practices can confuse developers and reduce the reliability of your API, especially if external clients depend on it.

### Summary: Why You Should Use HTTP Status Codes

Using HTTP status codes is not just about **following conventions**. It offers several concrete benefits:
**Clarity and Structure**: Status codes provide immediate insight into the outcome of a request.
**Efficiency**: Integer comparisons are faster than string parsing.
**Interoperability\***: Adhering to HTTP standards ensures other developers and systems can reliably use your API.
**Granularity**: Different codes provide nuanced feedback, helping clients handle responses appropriately.
**Maintainability**: Following standards makes your API predictable and easier to debug or extend.
While using strings for error handling might seem sufficient at first glance, **standard HTTP status codes offer better context, maintainability, and performance**. These benefits will become even more apparent if you ever plan to open your API to external users.

```

```
