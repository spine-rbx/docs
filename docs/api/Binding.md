# Binding
#### Extends [Object](./Object)
This class enables you to bind code to instances using CollectionService.
It is common to use the [Tag Editor Plugin](https://www.roblox.com/library/948084095/Tag-Editor)
to add tags to instances, and use binding to run code on those instances.

You should extend this class, add your own constructor and methods, and then
call the <code>[Bind](#method-Bind)</code> method to bind your class to a
CollectionService tag.

## Summary
### Methods
- <code><a style="color:white" href="#method-Bind">Bind</a>(Tag: string): </code>
::: details Inherited from [Object](./Object)
- <code><a style="color:white" href="#method-Extend">Extend</a>(): </code>
- <code><a style="color:white" href="#method-Is">Is</a>(Other: [Object](/api/object), Recursive: boolean): boolean</code>
- <code><a style="color:white" href="#method-New">New</a>(Args: ...): [Object](/api/object)</code>
:::
## Constructor
This constructor is called internally. Only call if you know what you
are doing.

#### Parameters
- <code>Instance: Instance</code> - Instance to bind to.
## Methods
### Bind {#method-Bind}
This method binds the current class to a CollectionService tag. A new object
will be created for each tagged instance.

#### Parameters
- <code>Tag: string</code> - The tag to bind to.
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
