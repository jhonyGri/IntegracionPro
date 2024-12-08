const express = require("express");
const Sentry = require("@sentry/node");
const app = express();
const PORT = 3000;

// Configura Sentry con tu DSN (Data Source Name)
Sentry.init({ dsn: 'https://cd9e4291b1886ff0ed54716c8ead48b8@o4508429523681280.ingest.us.sentry.io/4508429564182528"' });  // Reemplaza con tu URL DSN de Sentry

// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());

// Definir tus rutas
app.get("/", (req, res) => {
    // Generar un error para probar Sentry
    //throw new Error("¡Algo salió mal en la ruta principal!");
    res.send("Holaaaaa desde la API en expresSSsssssssssss!");
});

// Este middleware se encarga de los errores
app.use(Sentry.Handlers.errorHandler());

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Aplicación escuchando en puerto ${PORT}`);
});
