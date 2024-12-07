const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hola desde la API en express!");
});

app.listen(PORT, () => {
    console.log(`Aplicación escuchando en puerto ${PORT}`);
});
