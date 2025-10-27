import fs from "fs";

const file = "./data.json";
const data = JSON.parse(fs.readFileSync(file, "utf8"));

data.updated_at = new Date().toISOString();

fs.writeFileSync(file, JSON.stringify(data, null, 2));

console.log("✅ data.json actualizado:", data.updated_at);
