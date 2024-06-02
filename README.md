# Verdaccio with Bun (>1.1.12)

Small example how to install dependencies from a private registry using verdaccio an [bun](https://bun.sh/).

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

> Juan Picado, 2024.