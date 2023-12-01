import express from 'express';
import { validaRuc } from './validaRuc.js';
import cors from 'cors';

const app = express();
const port = 4201;

const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions)); // Permitir el origen http://localhost:3000

app.get('/', (req, res) => {
    res.send('Ejecutando microservicio 1!');
});

app.get('/validaRuc/:id', async (req, res) => {
    const id = req.params.id;
    const valida = await validaRuc(id);
    res.json({ valida });
});

app.listen(port, () => {
    console.log(`Microservicio 1 escuchando en http://localhost:${port}`);
});
