# Bin
#### Extends [Object](/api/Object)
Bin is similar to a commonly used "Maid" class. You give it items, and it
cleans them up at a later time.

## Summary
### Types
- <code><a style="color:white" href="#type-BinItem">BinItem</a>: Instance | RBXScriptConnection | { [any]: any } | (...any) -> (...any) | thread</code>
### Properties
- <code><a style="color:white" href="#prop-Collection">Collection</a>: { [BinItem](#type-BinItem) }</code>
### Methods
- <code><a style="color:white" href="#method-AddItem">AddItem</a>(Item: any): </code>
- <code><a style="color:white" href="#method-Destroy">Destroy</a>(): </code>
- <code><a style="color:white" href="#method-Empty">Empty</a>(): </code>
::: details Inherited from [Object](/api/Object)
- <code><a style="color:white" href="#method-Extend">Extend</a>(): </code>
- <code><a style="color:white" href="#method-Is">Is</a>(Other: [Object](/api/object), Recursive: boolean): boolean</code>
- <code><a style="color:white" href="#method-New">New</a>(Args: ...): [Object](/api/object)</code>
:::
## Constructor

## Types
### BinItem: <code>Instance | RBXScriptConnection | { [any]: any } | (...any) -> (...any) | thread</code> {#type-BinItem}
This is every item a bin can clean up. Instances are destroyed, Connections are disconnected,
tables with a `Destroy` or `Disconnect` method are called, functions are called, and threads
are closed.

## Properties
### Collection: <code>{ [BinItem](#type-BinItem) }</code> {#prop-Collection}
This is the collection of all items that have been given to the bin.
You may directly edit this if needed, but it is not recommended.

## Methods
### AddItem {#method-AddItem}
This method adds an item to the bin. Once added, an item
cannot be removed.


#### Parameters
- <code>Item: any</code>
### Destroy {#method-Destroy}
This calls `Empty` and then cleans up the bin itself.

### Empty {#method-Empty}
This calls the cleanup method for each item in the bin.

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
