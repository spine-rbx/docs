# Request
#### Extends [Object](./Object)
This class represents a HTTP Request. All methods on
this class return itself, so you can chain methods. This
is designed to somewhat mimic the Javascript "Fetch" API.
```lua
local Request = require(PATH.TO.REQUEST)

local RequestObject = Request:New()
	:SetMethod("POST")
	:SetUrl("http://example.com")
	:SetHeader("Content-Type", "application/json")
	:SetBody("{\"hello\": \"world\"}")
```

## Summary
### Types
- <code><a style="color:white" href="#type-RequestOptions">RequestOptions</a>: { Method: string?, Url: string?, Headers: { [string]: string? }?, Body: string? }</code>
### Properties
- <code><a style="color:white" href="#prop-Body">Body</a>: string?</code>
- <code><a style="color:white" href="#prop-Headers">Headers</a>: { [string]: string }</code>
- <code><a style="color:white" href="#prop-Method">Method</a>: string</code>
- <code><a style="color:white" href="#prop-Url">Url</a>: string?</code>
### Methods
- <code><a style="color:white" href="#method-SetBody">SetBody</a>(Body: string): Request</code>
- <code><a style="color:white" href="#method-SetHeader">SetHeader</a>(Header: string, Value: string): Request</code>
- <code><a style="color:white" href="#method-SetHeaders">SetHeaders</a>(Headers: { [string]: string }): Request</code>
- <code><a style="color:white" href="#method-SetMethod">SetMethod</a>(Method: string): Request</code>
- <code><a style="color:white" href="#method-SetUrl">SetUrl</a>(Url: string): Request</code>
::: details Inherited from [Object](./Object)
- <code><a style="color:white" href="#method-Extend">Extend</a>(): </code>
- <code><a style="color:white" href="#method-Is">Is</a>(Other: [Object](/api/object), Recursive: boolean): boolean</code>
- <code><a style="color:white" href="#method-New">New</a>(Args: ...): [Object](/api/object)</code>
:::
## Constructor

#### Parameters
- <code>Options: [RequestOptions](#type-requestoptions)</code>
## Types
### RequestOptions: <code>{ Method: string?, Url: string?, Headers: { [string]: string? }?, Body: string? }</code> {#type-RequestOptions}
This type represents the options that can be passed to the Request constructor.

## Properties
### Body: <code>string?</code> {#prop-Body}

### Headers: <code>{ [string]: string }</code> {#prop-Headers}

### Method: <code>string</code> {#prop-Method}

### Url: <code>string?</code> {#prop-Url}

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
### New {#method-New}
Creates a new object, passing in the arguments to all constructors.

#### Parameters
- <code>Args: ...</code> - Any arguments to pass to constructors
#### Returns
- <code>[Object](/api/object)</code> - The resulting object.
### SetBody {#method-SetBody}
This sets the body of the request, and returns the request object.

#### Parameters
- <code>Body: string</code>
#### Returns
- <code>Request</code>
### SetHeader {#method-SetHeader}
This sets a header of the request, and returns the request object.

#### Parameters
- <code>Header: string</code>
- <code>Value: string</code>
#### Returns
- <code>Request</code>
### SetHeaders {#method-SetHeaders}
This sets the headers of the request, and returns the request object.

#### Parameters
- <code>Headers: { [string]: string }</code>
#### Returns
- <code>Request</code>
### SetMethod {#method-SetMethod}
This sets the method of the request, and returns the request object.

#### Parameters
- <code>Method: string</code>
#### Returns
- <code>Request</code>
### SetUrl {#method-SetUrl}
This sets the URL of the request, and returns the request object.

#### Parameters
- <code>Url: string</code>
#### Returns
- <code>Request</code>
