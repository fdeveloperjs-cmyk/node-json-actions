import fs from "fs";

const file = "./data.json";

// Leer el JSON actual
const data = JSON.parse(fs.readFileSync(file, "utf8"));

// Cambiar valores
data.counter = (data.counter || 0) + 1;
data.updated_at = new Date().toISOString();
data.random_number = Math.floor(Math.random() * 10000); // número aleatorio

// Guardar el JSON actualizado
fs.writeFileSync(file, JSON.stringify(data, null, 2));

console.log("✅ JSON actualizado:");
console.table(data);

