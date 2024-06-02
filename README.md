# Verdaccio with Bun (>1.1.12)

Small example how to install dependencies from a private registry using verdaccio with [bun](https://bun.sh/).

- Install dependencies (verdaccio itself) from a private registry
- Run verdaccio with `bun`

```bash
bun main.js
```

```javascript
// main.js
import {runServer} from 'verdaccio';
(async () => {
    const app = await runServer(); // default configuration
    app.listen(4000, (event) => {
      // do something
    });
})();
```

```
// bunfig.toml
[install]
registry = "http://localhost:4873"
```

- [Override the default npm registry for bun install](https://bun.sh/guides/install/custom-registry)
- [Configure a private registry for an organization scope with bun install](https://bun.sh/guides/install/registry-scope)


> Juan Picado, 2024.
