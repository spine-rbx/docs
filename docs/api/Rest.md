# Rest

## Summary
### Properties
- <code><a style="color:white" href="#prop-Base64">Base64</a>: [Base64](/api/base64)</code>
- <code><a style="color:white" href="#prop-Json">Json</a>: [Json](/api/json)</code>
- <code><a style="color:white" href="#prop-Request">Request</a>: [Request](/api/request)</code>
- <code><a style="color:white" href="#prop-Response">Response</a>: [Response](/api/response)</code>
### Static Methods
- <code><a style="color:white" href="#static-Fetch">Fetch</a>(...: ...any): [Promise](/api/promise)</code>
## Properties
### Base64: <code>[Base64](/api/base64)</code> {#prop-Base64}

### Json: <code>[Json](/api/json)</code> {#prop-Json}

### Request: <code>[Request](/api/request)</code> {#prop-Request}

### Response: <code>[Response](/api/response)</code> {#prop-Response}

## Static Methods
### Fetch {#method-Fetch}
This is designed to somewhat mimic the Javascript "Fetch" API.
You can call this with many different argument configurations. 
You can call with a Url, a Url and Options table, an Options table,
or a [Request](/api/request) Object. This will always return a Promise that resolves
with the respective [Response](/api/response) object.

#### Parameters
- <code>...: ...any</code> - The fetch options.
#### Returns
- <code>[Promise](/api/promise)</code>
