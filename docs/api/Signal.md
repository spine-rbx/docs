# Signal
#### Extends [Object](./Object)
An implementation of signal. This is not the fastest implementation,
but it suits all of Spine's needs.

## Summary
### Properties
- <code><a style="color:white" href="#prop-_Bin">_Bin</a>: [Bin](/api/bin)</code>
- <code><a style="color:white" href="#prop-_CallbackList">_CallbackList</a>: { (...any) -> () }</code>
### Methods
- <code><a style="color:white" href="#method-Connect">Connect</a>(Callback: (...any) -> ()): { Disconnect: () -> () }</code>
- <code><a style="color:white" href="#method-Destroy">Destroy</a>(): </code>
- <code><a style="color:white" href="#method-Fire">Fire</a>(...: any): </code>
- <code><a style="color:white" href="#method-Once">Once</a>(Predicate: (...any) -> (boolean?)?): [Promise](/api/promise)</code>
- <code><a style="color:white" href="#method-Wait">Wait</a>(): [Promise](/api/promise)</code>
::: details Inherited from [Object](./Object)
- <code><a style="color:white" href="#method-Extend">Extend</a>(): </code>
- <code><a style="color:white" href="#method-Is">Is</a>(Other: [Object](/api/object), Recursive: boolean): boolean</code>
- <code><a style="color:white" href="#method-New">New</a>(Args: ...): [Object](/api/object)</code>
:::
## Constructor

## Properties
### _Bin: <code>[Bin](/api/bin)</code> {#prop-_Bin}
A bin used internally.

### _CallbackList: <code>{ (...any) -> () }</code> {#prop-_CallbackList}
A list of connected functions.

## Methods
### Connect {#method-Connect}
This connects a function to the signal, and returns a table
with a disconnect function.

#### Parameters
- <code>Callback: (...any) -> ()</code> - The function to connect.
#### Returns
- <code>{ Disconnect: () -> () }</code> - A table with a disconnect function.
### Destroy {#method-Destroy}
This function destroys the signal.

### Extend {#method-Extend}
Extends an object, the new object inherits all of the old object's
methods, properties, and importantly, constructor.

### Fire {#method-Fire}
This function fires the signal, passing the given arguments to all
connected functions.

#### Parameters
- <code>...: any</code> - Arguments to pass to the connected functions.
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
### Once {#method-Once}
This will wait until the signal is fired, then passes the values to the predicate.
If the predicate returns true, then it will resolve the promise with the values.
If there is no predicate, then it will resolve with the first passed values.

#### Parameters
- <code>Predicate: (...any) -> (boolean?)?</code> - The predicate to use.
#### Returns
- <code>[Promise](/api/promise)</code> - A promise that resolves with the passed values.
### Wait {#method-Wait}
This will wait until the signal is fired, then resolves the promise with the first passed values.
This is just a wrapper around `Once` with no predicate.

#### Returns
- <code>[Promise](/api/promise)</code> - A promise that resolves with the first passed values.
