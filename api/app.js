const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Holaaaaa desde la API en expresSSs!");
});

app.listen(PORT, () => {
    console.log(`Aplicación escuchando en puerto ${PORT}`);
});
