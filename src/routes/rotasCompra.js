import express from 'express';
import cors from 'cors';
import { createCompra, getAllCompras, deleteCompra } from '../controllers/compraControler.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/compras', getAllCompras);
app.post('/compras', createCompra);
app.delete('/compras/:id', deleteCompra)

app.listen(3000, () => {
  console.log('Servidor rodando com sucesso na porta 3000');
});
