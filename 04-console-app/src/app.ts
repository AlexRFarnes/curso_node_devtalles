import { yargsPlugin as args } from './config/plugins/yargs.plugin.js';
import { ServerApp } from './presentation/server-app.js';

(async () => {
  await main();
})();

async function main() {
  const { b: base, l: limit, s: displayTable } = args;
  ServerApp.run({ base, limit, displayTable });
}
