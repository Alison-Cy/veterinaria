const express = require('express');
const path = require('path');

const app = express();

// Servir todos los archivos dentro de la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal (redirige a dashboard.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/core/dashboard.html'));
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(Servidor corriendo en http://localhost:${PORT});
});