const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ mensaje: 'API funcionando correctamente 🚀' });
});

app.get('/api/productos', (req, res) => {
  res.json([{ id: 1, nombre: 'Laptop', precio: 1200 }]);
});

app.get('/api/usuarios', (req, res) => {
  res.json([{ id: 1, nombre: 'Juan', email: 'juan@email.com' }]);
});

app.get('/api/categorias', (req, res) => {
  res.json([{ id: 1, nombre: 'Electrónica' }]);
});

app.get('/api/pedidos', (req, res) => {
  res.json([{ id: 1, usuario: 'Juan', total: 500 }]);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
