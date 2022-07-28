# PipeContext
#### Extends [Object](./Object)
This is the context passed to callbacks in a pipe. Using
this, callbacks can access and mutate passed arguments or
instantly return a value.

## Summary
### Properties
- <code><a style="color:white" href="#prop-Args">Args</a>: { any }</code>
- <code><a style="color:white" href="#prop-Pipe">Pipe</a>: [Pipe](/api/pipe)</code>
- <code><a style="color:white" href="#prop-RawArgs">RawArgs</a>: { any }</code>
### Methods
::: details Inherited from [Object](./Object)
- <code><a style="color:white" href="#method-Extend">Extend</a>(): </code>
- <code><a style="color:white" href="#method-Is">Is</a>(Other: [Object](/api/object), Recursive: boolean): boolean</code>
- <code><a style="color:white" href="#method-New">New</a>(Args: ...): [Object](/api/object)</code>
:::
## Properties
### Args: <code>{ any }</code> {#prop-Args}
These are the arguments passed to `Run`. These can be changed,
and when the pipe is finished, these values will be returned.

### Pipe: <code>[Pipe](/api/pipe)</code> {#prop-Pipe}
The pipe that this context is associated with.

### RawArgs: <code>{ any }</code> {#prop-RawArgs}
The raw arguments passed to `Run`. These cannot be changed.

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
