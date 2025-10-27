import fs from "fs";

const file = "./data.json";
const data = JSON.parse(fs.readFileSync(file, "utf8"));

// Incrementa un contador y cambia la fecha
data.counter = (data.counter || 0) + 1;
data.updated_at = new Date().toISOString();

fs.writeFileSync(file, JSON.stringify(data, null, 2));

console.log("✅ data.json actualizado:");
console.log(data);
