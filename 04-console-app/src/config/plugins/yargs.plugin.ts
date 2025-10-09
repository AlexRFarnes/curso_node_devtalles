import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yargsPlugin = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "The base of the table",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "The limit of the table",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Show the table in the console",
  })
  .parseSync();
