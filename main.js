import {runServer} from 'verdaccio';
(async () => {
    const app = await runServer(); // default configuration
    app.listen(4000, (event) => {
      // do something
    });
})();