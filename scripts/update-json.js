import fs from "fs";

const file = "./data.json";
const data = JSON.parse(fs.readFileSync(file, "utf8"));

// Modificar valores visibles
data.counter = typeof data.counter === "number" ? data.counter + 1 : 0;
data.updated_at = new Date().toISOString();
data.random_number = Math.floor(Math.random() * 10000);

fs.writeFileSync(file, JSON.stringify(data, null, 2));

console.log("✅ JSON actualizado:", data);


