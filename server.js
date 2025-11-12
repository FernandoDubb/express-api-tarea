const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ mensaje: 'API funcionando correctamente'});
});

app.get('/api/productos', (req, res) => {
  console.log('GET /api/productos');
  res.json([
    { id: 1, nombre: 'Laptop', precio: 1200 },
    { id: 2, nombre: 'Mouse', precio: 25 },
    { id: 3, nombre: 'Teclado', precio: 45 }
  ]);
});

app.get('/api/usuarios', (req, res) => {
  console.log('GET /api/usuarios');
  res.json([
    { id: 1, nombre: 'Fernando', email: 'Fernando@email.com' },
    { id: 2, nombre: 'Pedro', email: 'Pedro@email.com' }
  ]);
});

app.get('/api/categorias', (req, res) => {
  console.log('GET /api/categorias');
  res.json([
    { id: 1, nombre: 'Electrónica' },
    { id: 2, nombre: 'Ropa' },
    { id: 3, nombre: 'Hogar' }
  ]);
});

app.get('/api/pedidos', (req, res) => {
  console.log('GET /api/pedidos');
  res.json([
    { id: 1, usuario: 'Fernando', total: 500 },
    { id: 2, usuario: 'Pedro', total: 750 }
  ]);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en: http://localhost:${port}`);
});

