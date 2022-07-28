# Pipe
#### Extends [Object](/api/Object)
Similar to [signal](/api/signal) but with a few differences.
Firstly, callbacks are not run in a separate thread, they are
run synchronously. Secondly, after activating a pipe, it will
return a value. Thirdly, callbacks are run in the order they
are added, with an optional priority. Finally, arguments passed
to a pipe can be mutated by callbacks.

## Summary
### Properties
- <code><a style="color:white" href="#prop-_CallbackList">_CallbackList</a>: { (Context: [PipeContext](/api/pipecontext), ...any) -> () }</code>
- <code><a style="color:white" href="#prop-_HighestPriority">_HighestPriority</a>: number</code>
### Methods
- <code><a style="color:white" href="#method-Destroy">Destroy</a>(): </code>
- <code><a style="color:white" href="#method-Listen">Listen</a>(Priority: number, Callback: (Context: [PipeContext](/api/pipecontext), ...any) -> ()): </code>
- <code><a style="color:white" href="#method-Run">Run</a>(Args: ...any): [Promise](/api/promise)</code>
::: details Inherited from [Object](/api/Object)
- <code><a style="color:white" href="#method-Extend">Extend</a>(): </code>
- <code><a style="color:white" href="#method-Is">Is</a>(Other: [Object](/api/object), Recursive: boolean): boolean</code>
- <code><a style="color:white" href="#method-New">New</a>(Args: ...): [Object](/api/object)</code>
:::
## Constructor

## Properties
### _CallbackList: <code>{ (Context: [PipeContext](/api/pipecontext), ...any) -> () }</code> {#prop-_CallbackList}
The internal list of callbacks.

### _HighestPriority: <code>number</code> {#prop-_HighestPriority}
The highest priority of a callback, used so that gaps in
priority are not a problem.

## Methods
### Destroy {#method-Destroy}
This unregisters all callbacks, enabling the pipe to be garbage collected.

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
### Listen {#method-Listen}
Registers a callback to be run when the pipe is activated. Once
registered, a callback cannot be unregistered. Each callback is
called with a [PipeContext](/api/pipecontext) object.

#### Parameters
- <code>Priority: number</code>
- <code>Callback: (Context: [PipeContext](/api/pipecontext), ...any) -> ()</code>
### New {#method-New}
Creates a new object, passing in the arguments to all constructors.

#### Parameters
- <code>Args: ...</code> - Any arguments to pass to constructors
#### Returns
- <code>[Object](/api/object)</code> - The resulting object.
### Run {#method-Run}
This method runs the functions in the pipe, and returns a promise
that resolves with the final "args" when all callbacks have been
run, or when one decides to return.

#### Parameters
- <code>Args: ...any</code> - The arguments to pass to the callbacks.
#### Returns
- <code>[Promise](/api/promise)</code> - The promise returned by the pipe.
