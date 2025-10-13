import fs from 'fs';
import { yargsPlugin as args } from './config/plugins/yargs.plugin.js';

const { b: base, l: limit, s: displayTable } = args;

let output: string = '';
output += `===================================
        Tabla del ${base}
===================================\n
`;

for (let i = 1; i <= limit; i++) {
  output += `${base} x  ${i} =  ${base * i}\n`;
}

if (displayTable) {
  console.log(output);
}
