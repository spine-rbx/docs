# Util
This is a collection of utility functions. Some are used within Spine,
and some are here because I find them useful.

## Summary
### Static Methods
- <code><a style="color:white" href="#static-Each">Each</a>(Parent: Instance, ChildAdded: (Child: Instance) -> ()?, ChildRemoved: (Child: Instance) -> ()?): { Disconnect: () -> () }</code>
- <code><a style="color:white" href="#static-FuzzyFind">FuzzyFind</a>(List: { string }, Text: string): { string }</code>
- <code><a style="color:white" href="#static-Make">Make</a>(Class: string, Props: { [string]: any }, Children: { Instance }): Instance</code>
- <code><a style="color:white" href="#static-Range">Range</a>(Value: number, OldMin: number, OldMax: number, NewMin: number, NewMax: number): number</code>
## Static Methods
### Each {#method-Each}
This function optionally connects a child added event, and a child removed event.
It returns a table with a function to disconnect the events. What makes this nice
is that it also runs the child added event for all children already in the parent.
If you are using this a lot, you might want to take a look at [Binding](/api/binding).
I personally use this in place of things like `Players.PlayerAdded`.

#### Parameters
- <code>Parent: Instance</code> - The parent to listen to.
- <code>ChildAdded: (Child: Instance) -> ()?</code> - The callback to call when a child is added.
- <code>ChildRemoved: (Child: Instance) -> ()?</code> - The callback to call when a child is removed.
#### Returns
- <code>{ Disconnect: () -> () }</code>
### FuzzyFind {#method-FuzzyFind}
This function finds matches to the text in the list. It only
checks up to the length of the text, and is useful for command
parsing. The table it returns has exact matches at the top.

Examples:
- `FuzzyFind({"foo", "bar", "baz"}, "ba")` -> `{"bar", "baz"}`
- `FuzzyFind({"foo", "bar", "baz"}, "bar")` -> `{"bar"}`
- `FuzzyFind({"foo", "bar", "baz"}, "")` -> `{"foo", "bar", "baz"}`

#### Parameters
- <code>List: { string }</code>
- <code>Text: string</code>
#### Returns
- <code>{ string }</code> - The results, ordered by closeness.
### Make {#method-Make}
This is a convenience function for creating instances. It creates
the instance of the requested class, and then sets the props and children.
This does not set function props to event listeners.

#### Parameters
- <code>Class: string</code> - The ClassName of the instance to create.
- <code>Props: { [string]: any }</code> - The properties to set on the instance.
- <code>Children: { Instance }</code> - The children to add to the instance.
#### Returns
- <code>Instance</code> - The instance created.
### Range {#method-Range}
This function takes a value in a range (ex: 0 - 100) and returns it
in a new range (ex: 0 - 20).

#### Parameters
- <code>Value: number</code>
- <code>OldMin: number</code>
- <code>OldMax: number</code>
- <code>NewMin: number</code>
- <code>NewMax: number</code>
#### Returns
- <code>number</code> - The value in the new range.
