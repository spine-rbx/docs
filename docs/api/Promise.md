# Promise
#### Extends [Object](/api/Object)
An implementation of promise. This somewhat follows A+ spec, but
is not in any way an exact implementation.

## Summary
### Properties
- <code><a style="color:white" href="#prop-_Thread">_Thread</a>: thread</code>
- <code><a style="color:white" href="#prop-RejectQueue">RejectQueue</a>: { (...any) -> () }</code>
- <code><a style="color:white" href="#prop-ResolveQueue">ResolveQueue</a>: { (...any) -> () }</code>
- <code><a style="color:white" href="#prop-Status">Status</a>: { Resolved: any, Rejected: any, Running: any } | any</code>
### Methods
- <code><a style="color:white" href="#method-_Reject">_Reject</a>(...: any): </code>
- <code><a style="color:white" href="#method-_Resolve">_Resolve</a>(...: any): </code>
- <code><a style="color:white" href="#method-Catch">Catch</a>(Callback: (...any) -> ()): Promise</code>
- <code><a style="color:white" href="#method-Finally">Finally</a>(Callback: (...any) -> ()): Promise</code>
- <code><a style="color:white" href="#method-Then">Then</a>(ResolveCallback: (...any) -> (...any)?, RejectCallback: (...any) -> (...any)?): Promise</code>
- <code><a style="color:white" href="#method-Wait">Wait</a>(): any</code>
::: details Inherited from [Object](/api/Object)
- <code><a style="color:white" href="#method-Extend">Extend</a>(): </code>
- <code><a style="color:white" href="#method-Is">Is</a>(Other: [Object](/api/object), Recursive: boolean): boolean</code>
- <code><a style="color:white" href="#method-New">New</a>(Args: ...): [Object](/api/object)</code>
:::
### Static Methods
- <code><a style="color:white" href="#static-Reject">Reject</a>(...: any): Promise</code>
- <code><a style="color:white" href="#static-Resolve">Resolve</a>(...: any): Promise</code>
## Constructor
This will call the passed function in a coroutine. These are pretty standard promises.
If you are unfamiliar with promises, I suggest you read a more in depth guide. Some of my
favorite resources are:
- [Promises and Why You Should Use Them](https://devforum.roblox.com/t/promises-and-why-you-should-use-them/350825)
- [Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

#### Parameters
- <code>Callback: (Resolve: (...any) -> (), Reject: (...any) -> ())</code> - The function to run.
## Properties
### _Thread: <code>thread</code> {#prop-_Thread}
This is the coroutine that is running the callback.

### RejectQueue: <code>{ (...any) -> () }</code> {#prop-RejectQueue}
This a queue of functions to call when the promise is rejected.

### ResolveQueue: <code>{ (...any) -> () }</code> {#prop-ResolveQueue}
This a queue of functions to call when the promise is resolved.

### Status: <code>{ Resolved: any, Rejected: any, Running: any } | any</code> {#prop-Status}
An enum representing promise status. When on an active promise,
this gets overwritten with the status of that promise.

## Methods
### _Reject {#method-_Reject}
This is the function that is called when the promise is rejected.
Do not call this directly.

#### Parameters
- <code>...: any</code>
### _Resolve {#method-_Resolve}
This is the function that is called when the promise is resolved.
Do not call this directly.

#### Parameters
- <code>...: any</code>
### Catch {#method-Catch}
This function is a wrapper around `Promise:Then(nil, Callback)`. It binds
only the reject callback.

#### Parameters
- <code>Callback: (...any) -> ()</code> - The function to call when the promise is rejected.
#### Returns
- <code>Promise</code> - A new promise that is resolved or rejected based on the outcome of the original promise.
### Extend {#method-Extend}
Extends an object, the new object inherits all of the old object's
methods, properties, and importantly, constructor.

### Finally {#method-Finally}
This function is a wrapper around `Promise:Then(Callback, Callback)`. It binds the resolve
and reject callbacks to the same function.

#### Parameters
- <code>Callback: (...any) -> ()</code> - The function to call when the promise is resolved or rejected.
#### Returns
- <code>Promise</code> - A new promise that is resolved or rejected based on the outcome of the original promise.
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
### Then {#method-Then}
This function is the core of the promise model. When a promise is resolved or rejected,
these callbacks will be called. This function then returns a promise, which is resolved
with the value returned by the callback. Using this, you can chain promises together.
If you don't understand this, I once again suggest you read a more in depth guide.

#### Parameters
- <code>ResolveCallback: (...any) -> (...any)?</code> - The function to call when the promise is resolved.
- <code>RejectCallback: (...any) -> (...any)?</code> - The function to call when the promise is rejected.
#### Returns
- <code>Promise</code> - A new promise that is resolved or rejected based on the outcome of the original promise.
### Wait {#method-Wait}
This function will wait until the promise is resolved. It will return the resolved value.
If the promise is rejected, it will throw an error.

**This function yields**

#### Returns
- <code>any</code> - The resolved value of the promise.
## Static Methods
### Reject {#method-Reject}
This returns a promise that instantly rejects with the given value.

#### Parameters
- <code>...: any</code>
#### Returns
- <code>Promise</code> - A promise that is rejected with the given value.
### Resolve {#method-Resolve}
This returns a promise that instantly resolves with the given value.

#### Parameters
- <code>...: any</code>
#### Returns
- <code>Promise</code> - A promise that is resolved with the given value.
