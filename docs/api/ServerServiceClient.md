# ServerServiceClient
#### Extends [Object](./Object)
This is one of those classes that isn't explained very well
by simple API documentation. I suggest you read the topic about
services.

## Summary
### Properties
- <code><a style="color:white" href="#prop-_Hidden">_Hidden</a>: { [string]: [ServerRemoteCallback](/api/serverremotecallback) }</code>
- <code><a style="color:white" href="#prop-_Name">_Name</a>: string</code>
- <code><a style="color:white" href="#prop-_Server">_Server</a>: [ServerService](/api/serverservice)</code>
### Methods
- <code><a style="color:white" href="#method-__newindex">__newindex</a>(i: string, v: any): </code>
- <code><a style="color:white" href="#method-_Make">_Make</a>(): </code>
::: details Inherited from [Object](./Object)
- <code><a style="color:white" href="#method-Extend">Extend</a>(): </code>
- <code><a style="color:white" href="#method-Is">Is</a>(Other: [Object](/api/object), Recursive: boolean): boolean</code>
- <code><a style="color:white" href="#method-New">New</a>(Args: ...): [Object](/api/object)</code>
:::
## Properties
### _Hidden: <code>{ [string]: [ServerRemoteCallback](/api/serverremotecallback) }</code> {#prop-_Hidden}

### _Name: <code>string</code> {#prop-_Name}

### _Server: <code>[ServerService](/api/serverservice)</code> {#prop-_Server}

## Methods
### __newindex {#method-__newindex}

#### Parameters
- <code>i: string</code>
- <code>v: any</code>
### _Make {#method-_Make}
This method creates the service folder.

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
