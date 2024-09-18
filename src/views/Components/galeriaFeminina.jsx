import React, { useState } from 'react'; // Corrigido: Importar useState
import Item from './item';
import { FaPlus } from 'react-icons/fa'; // Corrigido: Importar FaPl

function GaleriaFem() {
  const [successMessage, setSuccessMessage] = useState(null); // Estado para mensagem de sucesso

  const adicionarAoCarrinho = async (produto) => {
    try {
      const response = await fetch('http://localhost:3000/compras', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: produto.altText,
          descricao: produto.descricao,
          preco: produto.preco,
          imagem_url: produto.imageUrl
        }),
      });

      if (!response.ok) {
        const errorText = await response.text(); // Obtém o texto da resposta do erro
        throw new Error(`Erro na resposta do servidor: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log('Resposta do servidor:', data);
      setSuccessMessage(produto.id); // Atualiza o estado com o ID do produto adicionado
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error);
    }
  };

  // Simulando uma lista de produtos
  const produtos = [
    { id: 1, link: '#', imageUrl: 'catalogo_feminino.png', altText: 'Energia Zen', descricao: 'Descrição do produto', preco: 'R$5,00' },
    { id: 2, link: '#', imageUrl: 'catalogo_feminino.png', altText: 'Energia Zen', descricao: 'Descrição do produto', preco: 'R$10,00' },
    { id: 3, link: '#', imageUrl: 'catalogo_feminino.png', altText: 'Energia Zen', descricao: 'Descrição do produto', preco: 'R$20,00' },
    { id: 4, link: '#', imageUrl: 'catalogo_feminino.png', altText: 'Energia Zen', descricao: 'Descrição do produto', preco: 'R$10,00' },
    { id: 5, link: '#', imageUrl: 'catalogo_feminino.png', altText: 'Energia Zen', descricao: 'Descrição do produto', preco: 'R$18,00' },
    { id: 6, link: '#', imageUrl: 'catalogo_feminino.png', altText: 'Energia Zen', descricao: 'Descrição do produto', preco: 'R$10,00' },
    { id: 7, link: '#', imageUrl: 'catalogo_feminino.png', altText: 'Energia Zen', descricao: 'Descrição do produto', preco: 'R$10,00' },
    { id: 8, link: '#', imageUrl: 'catalogo_feminino.png', altText: 'Energia Zen', descricao: 'Descrição do produto', preco: 'R$10,00' },
    { id: 9, link: '#', imageUrl: 'catalogo_feminino.png', altText: 'Energia Zen', descricao: 'Descrição do produto', preco: 'R$10,00' },
    { id: 10, link: '#', imageUrl: 'catalogo_feminino.png', altText: 'Energia Zen', descricao: 'Descrição do produto', preco: 'R$10,00' },
    { id: 11, link: '#', imageUrl: 'catalogo_feminino.png', altText: 'Energia Zen', descricao: 'Descrição do produto', preco: 'R$10,00' },
    { id: 12, link: '#', imageUrl: 'catalogo_feminino.png', altText: 'Energia Zen', descricao: 'Descrição do produto', preco: 'R$10,00' }
  ];

  // Organizando produtos em linhas
  const linhas = [];
  for (let i = 0; i < produtos.length; i += 4) {
    linhas.push(produtos.slice(i, i + 4));
  }

  return (
    <section>
    <div className="container">
      <div className="card">
            {produtos.map((produto) => (
              <div className="roupa" key={produto.id}>
                <Item
                  link={produto.link}
                  imageUrl={produto.imageUrl}
                  altText={produto.altText}
                  className="roupas"
                  titleClassName="titulo-roupa"
                />
                <div className="descricao">
                  <span>{produto.descricao}</span>
                  <br />
                  <span id="preco">{produto.preco}</span>
                </div>
                <div className="button-add">
                  <button onClick={() => adicionarAoCarrinho(produto)}>
                    <FaPlus />
                    {successMessage === produto.id ? ' Adicionado com sucesso' : ' Adicionar ao carrinho'}
                  </button>
                </div>
              </div>
            ))}
      </div>
    </div>
  </section>
  );
}

export default GaleriaFem;
