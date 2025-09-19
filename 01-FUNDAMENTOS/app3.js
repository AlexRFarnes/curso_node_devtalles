const fs = require("fs");

const content = fs.readFileSync("README.md", "utf-8");

const words = content.split(" ");
const wordCount = words.length;
const reactCountRegex = content.match(/React/gi ?? []).length;
const reactCountFilter = words.filter(word =>
  word.toLowerCase().includes("react")
).length;

console.log("Palabras: ", wordCount);
console.log("Palabras React:", reactCountRegex);
console.log("Palabras React:", reactCountFilter);
