<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/core](./core.md) &gt; [Client](./core.client.md) &gt; [listPolicies](./core.client.listpolicies.md)

## Client.listPolicies() method

List policies.

<b>Signature:</b>

```typescript
listPolicies(): Promise<ListPoliciesResponse>;
```
<b>Returns:</b>

Promise&lt;[ListPoliciesResponse](./core.listpoliciesresponse.md)<!-- -->&gt;

## Remarks

Requires

- the client to be configured with [Options.adminCredentials](./core.options.admincredentials.md)<!-- -->, and

- the Cerbos policy decision point server to be configured with the [admin API](https://docs.cerbos.dev/cerbos/latest/api/admin_api.html) enabled.

## Example


```typescript
const { ids } = await cerbos.listPolicies();
```
