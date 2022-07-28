# ClientRemoteCallback
#### Extends [Object](/api/Object)
A wrapper around RemoteFunctions.

## Summary
### Properties
- <code><a style="color:white" href="#prop-_Bin">_Bin</a>: [Bin](/api/bin)</code>
- <code><a style="color:white" href="#prop-_Instance">_Instance</a>: RemoteFunction</code>
### Methods
- <code><a style="color:white" href="#method-Destroy">Destroy</a>(): </code>
- <code><a style="color:white" href="#method-InvokeServer">InvokeServer</a>(...: any): [Promise](/api/promise)</code>
::: details Inherited from [Object](/api/Object)
- <code><a style="color:white" href="#method-Extend">Extend</a>(): </code>
- <code><a style="color:white" href="#method-Is">Is</a>(Other: [Object](/api/object), Recursive: boolean): boolean</code>
- <code><a style="color:white" href="#method-New">New</a>(Args: ...): [Object](/api/object)</code>
:::
## Constructor

#### Parameters
- <code>Instance: RemoteFunction</code> - Instance to bind to.
## Properties
### _Bin: <code>[Bin](/api/bin)</code> {#prop-_Bin}
A bin used internally by the object.

### _Instance: <code>RemoteFunction</code> {#prop-_Instance}
The remote function related to this object.

## Methods
### Destroy {#method-Destroy}
This simply calls the `Empty` method on [_Bin](#prop-_Bin).

### Extend {#method-Extend}
Extends an object, the new object inherits all of the old object's
methods, properties, and importantly, constructor.

### InvokeServer {#method-InvokeServer}

#### Parameters
- <code>...: any</code> - Arguments to pass to the server function.
#### Returns
- <code>[Promise](/api/promise)</code> - A promise that resolves with the result of the server function.
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
