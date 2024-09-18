// src/controllers/compraController.js

import { create, read, deleteComp } from '../models/compraModel.js';

export async function createCompra(req, res) {
  const { nome, descricao, preco, imagem_url } = req.body;

  // Validação básica dos dados recebidos
  if (!nome || !descricao || !preco || !imagem_url) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  console.log('Dados Recebidos do frontend:', { nome, descricao, preco, imagem_url });

  try {
    const result = await create(nome, descricao, preco, imagem_url);
    res.status(201).json({ mensagem: 'Compra adicionada com sucesso', data: result });
  } catch (err) {
    console.error('Erro ao adicionar compra:', err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

export async function getAllCompras(req, res) {
  try {
    const compras = await new Promise((resolve, reject) => {
      read((err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
    res.json(compras);
  } catch (err) {
    console.error('Erro ao buscar compras:', err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

//deletar compra do carrinho
export async function deleteCompra(req, res) {
  const { id } = req.params;
  console.log('delete recebidos do frontend: ', {id});
  deleteComp(id, (err, result) => {
      if(err) {
          res.status(500).json({error: err.message});
          return;
      }
      res.send('Compra excluída da lista com sucesso');
  });
}


