import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yargsPlugin = yargs(hideBin(process.argv))
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'The base for the multiplication table',
  })
  .option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'The limit for the multiplication table',
  })
  .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show the multiplication table in the console',
  })
  .option('n', {
    alias: 'name',
    type: 'string',
    default: 'table',
    describe: 'The name of the file to save the multiplication table',
  })
  .option('d', {
    alias: 'destination',
    type: 'string',
    default: 'outputs',
    describe: 'The destination of the file to save the multiplication table',
  })
  .check((args, options) => {
    if (args.b < 0) {
      throw new Error('The base must be positive');
    }
    if (args.l < 1) {
      throw new Error('The limit must be greater than 0');
    }

    return true;
  })
  .parseSync();
