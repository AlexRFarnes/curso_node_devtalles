import { yargsPlugin } from './config/plugins/yargs.plugin.js';

(async () => {
  await main();
})();

async function main() {
  const { b: base, l: limit, s: show } = yargsPlugin;
  console.log({ base, limit, show });
}
