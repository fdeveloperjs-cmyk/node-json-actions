import express from "express";
import fs from "fs";

const app = express();
const port = process.env.PORT || 3000;

// Ruta que muestra el contenido de data.json
app.get("/data", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));
  res.json(data);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}/data`);
});
