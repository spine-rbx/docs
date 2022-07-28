# ServerRemoteValue
#### Extends [Object](./Object)
A wrapper around RemoteEvents that lets the server sync
values between itself and clients.

## Summary
### Properties
- <code><a style="color:white" href="#prop-_Bin">_Bin</a>: [Bin](/api/bin)</code>
- <code><a style="color:white" href="#prop-_Instance">_Instance</a>: RemoteEvent</code>
- <code><a style="color:white" href="#prop-_PlayerList">_PlayerList</a>: { [Player]: any }</code>
- <code><a style="color:white" href="#prop-_PlayerStatus">_PlayerStatus</a>: { [Player]: any }</code>
- <code><a style="color:white" href="#prop-_Value">_Value</a>: any</code>
### Methods
- <code><a style="color:white" href="#method-_UpatePlayer">_UpatePlayer</a>(Player: Player): </code>
- <code><a style="color:white" href="#method-_UpdatePlayers">_UpdatePlayers</a>(): </code>
- <code><a style="color:white" href="#method-Destroy">Destroy</a>(): </code>
- <code><a style="color:white" href="#method-Get">Get</a>(): any</code>
- <code><a style="color:white" href="#method-GetFor">GetFor</a>(Player: Player): any</code>
- <code><a style="color:white" href="#method-Set">Set</a>(Value: any): </code>
- <code><a style="color:white" href="#method-SetFor">SetFor</a>(Player: Player, Value: any): </code>
::: details Inherited from [Object](./Object)
- <code><a style="color:white" href="#method-Extend">Extend</a>(): </code>
- <code><a style="color:white" href="#method-Is">Is</a>(Other: [Object](/api/object), Recursive: boolean): boolean</code>
- <code><a style="color:white" href="#method-New">New</a>(Args: ...): [Object](/api/object)</code>
:::
## Constructor

#### Parameters
- <code>Parent: Instance</code> - The parent to place the remote event under.
- <code>Name: string</code> - The name of the remote event.
- <code>StartValue: any</code> - The value to start with.
## Properties
### _Bin: <code>[Bin](/api/bin)</code> {#prop-_Bin}
A bin object that is used internally.

### _Instance: <code>RemoteEvent</code> {#prop-_Instance}
The remote event that communicates values to the client.

### _PlayerList: <code>{ [Player]: any }</code> {#prop-_PlayerList}
The table of player specific values.

### _PlayerStatus: <code>{ [Player]: any }</code> {#prop-_PlayerStatus}
The table with a list of each player's stored value.

### _Value: <code>any</code> {#prop-_Value}
The global value, if a player has a specific value,
then that specific value will be used instead.

## Methods
### _UpatePlayer {#method-_UpatePlayer}
This method is used internally to update a player's value.

#### Parameters
- <code>Player: Player</code> - The player to update.
### _UpdatePlayers {#method-_UpdatePlayers}
This method is used internally to update all players' values.

### Destroy {#method-Destroy}
This method destroys the remote value.

### Extend {#method-Extend}
Extends an object, the new object inherits all of the old object's
methods, properties, and importantly, constructor.

### Get {#method-Get}
This method returns the global value.

#### Returns
- <code>any</code> - The global value.
### GetFor {#method-GetFor}
This method returns a player specific value. If the player
has no value, it returns the global value instead.

#### Parameters
- <code>Player: Player</code> - The player to get the value for.
#### Returns
- <code>any</code> - The player specific value.
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
### Set {#method-Set}
This method sets the global value. This does
not clear any player specific values.

#### Parameters
- <code>Value: any</code> - The value to set.
### SetFor {#method-SetFor}
This method sets a player specific value. Setting
a player's value to nil will clear the value, and give
them the global value.

#### Parameters
- <code>Player: Player</code> - The player to set the value for.
- <code>Value: any</code> - The value to set.
