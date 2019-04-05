# fastboot-test-app

### The Issue
`ember-cli-fastboot` build it's manifest and dependencies one addon level deep in the dependency tree

`ember-data` at master has introduced `ember-fetch` as a dependency which to a host app `ember-fetch` is now two levels deep in the dependency tree.

### MY PR for ember-cli-fastboot
[Recursive Addons PR](https://github.com/kiwiupover/ember-cli-fastboot/pull/2/files)
This PR builds dependency graph and the manifest correctly. 

The last piece I need help with is adding any nested dependencies to the dist folder.

When adding `ember-fetch` as an immediate dependency of the host app, it adds a folder `ember-fetch/...` to the `dist` folder. However, when `ember-fetch` is removed from the host app and is included with `ember-data` build doesn't move the `ember-fetch/..` folder into the `dist` folder.

I can't find where the build is moving the dependent folders into the dist folder at build time.

`ember-cli-moment-shim` also moves a moment folder into the `dist` folder.  I'm sure if it was nested in another addon we would have the same issue.

@rwjblue and you help me?
