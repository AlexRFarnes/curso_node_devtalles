import fs from "fs";

let output: string = "";
let base: number = 5;
output += `===================================
        Tabla del ${base}
===================================\n
`;

for (let i = 1; i <= 10; i++) {
  output += `${base} x  ${i} =  ${base * i}\n`;
}

console.log(output);

const outDir = "outputs";

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(`${outDir}/tabla-${base}.txt`, output, "utf-8");
