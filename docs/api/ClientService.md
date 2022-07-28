# ClientService
#### Extends [Object](./Object)
This is one of those classes that isn't explained very well
by simple API documentation. I suggest you read the topic about
services.

## Summary
### Properties
- <code><a style="color:white" href="#prop-Promises">Promises</a>: { [string]: Promise }</code>
- <code><a style="color:white" href="#prop-ServiceList">ServiceList</a>: { [string]: [ClientService](/api/clientservice) }</code>
- <code><a style="color:white" href="#prop-Yielding">Yielding</a>: { [string]: thread }</code>
### Methods
::: details Inherited from [Object](./Object)
- <code><a style="color:white" href="#method-Extend">Extend</a>(): </code>
- <code><a style="color:white" href="#method-Is">Is</a>(Other: [Object](/api/object), Recursive: boolean): boolean</code>
- <code><a style="color:white" href="#method-New">New</a>(Args: ...): [Object](/api/object)</code>
:::
### Static Methods
- <code><a style="color:white" href="#static-GetService">GetService</a>(Name: string): [Promise](/api/promise)</code>
## Properties
### Promises: <code>{ [string]: Promise }</code> {#prop-Promises}

### ServiceList: <code>{ [string]: [ClientService](/api/clientservice) }</code> {#prop-ServiceList}

### Yielding: <code>{ [string]: thread }</code> {#prop-Yielding}

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
## Static Methods
### GetService {#method-GetService}

#### Parameters
- <code>Name: string</code>
#### Returns
- <code>[Promise](/api/promise)</code> - A promise that resolves with the service.
