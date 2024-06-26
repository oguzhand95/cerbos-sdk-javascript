<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/embedded](./embedded.md) &gt; [AutoUpdatingLoader](./embedded.autoupdatingloader.md) &gt; [pending](./embedded.autoupdatingloader.pending.md)

## AutoUpdatingLoader.pending property

The metadata of a new embedded policy decision point bundle that has been downloaded but is not yet being used to evaluate policy decisions.

**Signature:**

```typescript
get pending(): BundleMetadata | undefined;
```

## Remarks

Only set if [AutoUpdateOptions.activateOnLoad](./embedded.autoupdateoptions.activateonload.md) is `false` and an update has been downloaded.

Use [AutoUpdatingLoader.activate()](./embedded.autoupdatingloader.activate.md) to start using the pending bundle to evaluate policy decisions.

