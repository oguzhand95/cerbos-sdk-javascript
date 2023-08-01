<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/core](./core.md) &gt; [ResourcePolicyBody](./core.resourcepolicybody.md)

## ResourcePolicyBody interface

A [policy](https://docs.cerbos.dev/cerbos/latest/policies/resource_policies.html) defining rules for actions that can be performed on a given resource.

**Signature:**

```typescript
export interface ResourcePolicyBody 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [importDerivedRoles?](./core.resourcepolicybody.importderivedroles.md) |  | string\[\] | _(Optional)_ Name of a set of [derived roles](https://docs.cerbos.dev/cerbos/latest/policies/derived_roles.html) to import. |
|  [resource](./core.resourcepolicybody.resource.md) |  | string | The name of the resource to which the policy applies. |
|  [rules](./core.resourcepolicybody.rules.md) |  | [ResourceRule](./core.resourcerule.md)<!-- -->\[\] | Rules defining the actions that can be performed on the resource. |
|  [schemas?](./core.resourcepolicybody.schemas.md) |  | [SchemaRefs](./core.schemarefs.md) \| undefined | _(Optional)_ [Schemas](https://docs.cerbos.dev/cerbos/latest/policies/schemas.html) for principal and resource attributes. |
|  [scope?](./core.resourcepolicybody.scope.md) |  | string | _(Optional)_ [Scope](https://docs.cerbos.dev/cerbos/latest/policies/scoped_policies.html) of the policy. |
|  [variables?](./core.resourcepolicybody.variables.md) |  | [Variables](./core.variables.md) \| undefined | _(Optional)_ [Variables](https://docs.cerbos.dev/cerbos/latest/policies/variables.html) defined for use in conditions. |
|  [version](./core.resourcepolicybody.version.md) |  | string | The version of the policy. |
