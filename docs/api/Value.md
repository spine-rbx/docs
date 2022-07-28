# Value
#### Extends [Signal](/api/Signal)
This represents a value, you can listen for changes, observe the value,
or just read and write.

## Summary
### Properties
- <code><a style="color:white" href="#prop-_Children">_Children</a>: { Value }</code>
- <code><a style="color:white" href="#prop-Value">Value</a>: any</code>
::: details Inherited from [Signal](/api/Signal)
- <code><a style="color:white" href="#prop-_Bin">_Bin</a>: [Bin](/api/bin)</code>
- <code><a style="color:white" href="#prop-_CallbackList">_CallbackList</a>: { (...any) -> () }</code>
:::
### Methods
- <code><a style="color:white" href="#method-Get">Get</a>(): any</code>
- <code><a style="color:white" href="#method-Map">Map</a>(Callback: (Value: any) -> (any)): [Value](/api/value)</code>
- <code><a style="color:white" href="#method-Observe">Observe</a>(Callback: (Value: any) -> ()): { Disconnect: () -> () }</code>
- <code><a style="color:white" href="#method-Set">Set</a>(Value: any): </code>
::: details Inherited from [Signal](/api/Signal)
- <code><a style="color:white" href="#method-Connect">Connect</a>(Callback: (...any) -> ()): { Disconnect: () -> () }</code>
- <code><a style="color:white" href="#method-Destroy">Destroy</a>(): </code>
- <code><a style="color:white" href="#method-Fire">Fire</a>(...: any): </code>
- <code><a style="color:white" href="#method-Once">Once</a>(Predicate: (...any) -> (boolean?)?): [Promise](/api/promise)</code>
- <code><a style="color:white" href="#method-Wait">Wait</a>(): [Promise](/api/promise)</code>
:::
::: details Inherited from [Object](/api/Object)
- <code><a style="color:white" href="#method-Extend">Extend</a>(): </code>
- <code><a style="color:white" href="#method-Is">Is</a>(Other: [Object](/api/object), Recursive: boolean): boolean</code>
- <code><a style="color:white" href="#method-New">New</a>(Args: ...): [Object](/api/object)</code>
:::
### Static Methods
- <code><a style="color:white" href="#static-Unwrap">Unwrap</a>(Value: [Value](/api/value) | any): any</code>
## Constructor

#### Parameters
- <code>Value: any</code> - The value to initialize with.
## Properties
### _Bin: <code>[Bin](/api/bin)</code> {#prop-_Bin}
A bin used internally.

### _CallbackList: <code>{ (...any) -> () }</code> {#prop-_CallbackList}
A list of connected functions.

### _Children: <code>{ Value }</code> {#prop-_Children}
The values that are created from mapping this value.

### Value: <code>any</code> {#prop-Value}
The value currently stored in this object.

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
### Get {#method-Get}
This will return the value of this object.

#### Returns
- <code>any</code> - The value of this object.
### Is {#method-Is}
Checks if an object is of a certain type. You can enable the
`Recursive` parameter to check if an object inherits at all.

#### Parameters
- <code>Other: [Object](/api/object)</code> - The object to check inheritance on.
- <code>Recursive: boolean</code> - Whether to check if the object inherits from the other object, or is a direct instance of it.
#### Returns
- <code>boolean</code> - Whether the other object inherits from this one.
### Map {#method-Map}
This will create a new value that is a mapping of this value to the callback.
Whenever the old value changes, the callback will be invoked, and the new
object's value will be set to whatever the callback returns.

#### Parameters
- <code>Callback: (Value: any) -> (any)</code> - The callback to call when the value changes.
#### Returns
- <code>[Value](/api/value)</code> - The new value.
### New {#method-New}
Creates a new object, passing in the arguments to all constructors.

#### Parameters
- <code>Args: ...</code> - Any arguments to pass to constructors
#### Returns
- <code>[Object](/api/object)</code> - The resulting object.
### Observe {#method-Observe}
This method will call the callback immediately with the current value.
It will then connect to Value, and return the connection.

#### Parameters
- <code>Callback: (Value: any) -> ()</code> - The callback to call when the value changes.
#### Returns
- <code>{ Disconnect: () -> () }</code>
### Once {#method-Once}
This will wait until the signal is fired, then passes the values to the predicate.
If the predicate returns true, then it will resolve the promise with the values.
If there is no predicate, then it will resolve with the first passed values.

#### Parameters
- <code>Predicate: (...any) -> (boolean?)?</code> - The predicate to use.
#### Returns
- <code>[Promise](/api/promise)</code> - A promise that resolves with the passed values.
### Set {#method-Set}
This will set the value of this object, and notify all listeners.

#### Parameters
- <code>Value: any</code> - The value to set.
### Wait {#method-Wait}
This will wait until the signal is fired, then resolves the promise with the first passed values.
This is just a wrapper around `Once` with no predicate.

#### Returns
- <code>[Promise](/api/promise)</code> - A promise that resolves with the first passed values.
## Static Methods
### Unwrap {#method-Unwrap}
This takes a value and unwraps it. If it is a Value Object, it
will return the object's value. If it is not a value object, it
will return the value.

#### Parameters
- <code>Value: [Value](/api/value) | any</code>
#### Returns
- <code>any</code> - The unwrapped value.
