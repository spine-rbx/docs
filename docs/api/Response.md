# Response
#### Extends [Object](./Object)
This class represents a HTTP Response. This is designed to
somewhat mimic the Javascript "Fetch" API.

## Summary
### Properties
- <code><a style="color:white" href="#prop-Body">Body</a>: string</code>
- <code><a style="color:white" href="#prop-Headers">Headers</a>: { [string]: string }</code>
- <code><a style="color:white" href="#prop-Ok">Ok</a>: boolean</code>
- <code><a style="color:white" href="#prop-Request">Request</a>: [Request](/api/request)</code>
- <code><a style="color:white" href="#prop-Status">Status</a>: number</code>
- <code><a style="color:white" href="#prop-StatusText">StatusText</a>: string</code>
### Methods
- <code><a style="color:white" href="#method-Json">Json</a>(): any</code>
- <code><a style="color:white" href="#method-Text">Text</a>(): string</code>
::: details Inherited from [Object](./Object)
- <code><a style="color:white" href="#method-Extend">Extend</a>(): </code>
- <code><a style="color:white" href="#method-Is">Is</a>(Other: [Object](/api/object), Recursive: boolean): boolean</code>
- <code><a style="color:white" href="#method-New">New</a>(Args: ...): [Object](/api/object)</code>
:::
## Properties
### Body: <code>string</code> {#prop-Body}

### Headers: <code>{ [string]: string }</code> {#prop-Headers}

### Ok: <code>boolean</code> {#prop-Ok}
If the status is between 200 and 299 (inclusive).

### Request: <code>[Request](/api/request)</code> {#prop-Request}
This is the request that got this response.

### Status: <code>number</code> {#prop-Status}

### StatusText: <code>string</code> {#prop-StatusText}
The status text related to the code.

Examples:
- 200: OK
- 404: Not Found
- 500: Internal Server Error

## Methods
### Extend {#method-Extend}
Extends an object, the new object inherits all of the old object's
methods, properties, and importantly, constructor.

### Is {#method-Is}
Checks if an object is of a certain type. You can enable the
`Recursive` parameter to check if an object inherits at all.

#### Parameters
- <code>Other: [Object](/api/object)</code> - The object to check inheritance on.
- <code>Recursive: boolean</code> - Whether to check if the object inherits from the other object, or is a direct instance of it.
#### Returns
- <code>boolean</code> - Whether the other object inherits from this one.
### Json {#method-Json}
This returns the decoded JSON body of the response.

#### Returns
- <code>any</code>
### New {#method-New}
Creates a new object, passing in the arguments to all constructors.

#### Parameters
- <code>Args: ...</code> - Any arguments to pass to constructors
#### Returns
- <code>[Object](/api/object)</code> - The resulting object.
### Text {#method-Text}
This returns the body of the response.

#### Returns
- <code>string</code>
