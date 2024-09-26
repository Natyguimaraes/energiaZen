import React, { useState } from 'react'; // Corrigido: Importar useState
import Item from './item';
import { CiShoppingCart } from "react-icons/ci";

function GaleriaMasc() {
  const [successMessage, setSuccessMessage] = useState(null); // Estado para mensagem de sucesso
  const [visibleCount, setVisibleCount] = useState(6);

   const adicionarAoCarrinho = (produto) => {
    setCarrinho((prevCarrinho) => [...prevCarrinho, produto]);
    setSuccessMessage(produto.id);
  };
  // Simulando uma lista de produtos
  const produtos = [
    { id: 1, link: '#', imageUrl: 'catalogo_masculino.png', altText: 'Energia Zen', descricao: 'Descrição do produto', preco: 'R$5,00' },
    { id: 2, link: '#', imageUrl: 'catalogo_masculino.png', altText: 'Energia Zen', descricao: 'Descrição do produto', preco: 'R$10,00' },
    { id: 3, link: '#', imageUrl: 'catalogo_masculino.png', altText: 'Energia Zen', descricao: 'Descrição do produto', preco: 'R$20,00' },
    { id: 4, link: '#', imageUrl: 'catalogo_masculino.png', altText: 'Energia Zen', descricao: 'Descrição do produto', preco: 'R$10,00' },
    { id: 5, link: '#', imageUrl: 'catalogo_masculino.png', altText: 'Energia Zen', descricao: 'Descrição do produto', preco: 'R$18,00' },
    { id: 6, link: '#', imageUrl: 'catalogo_masculino.png', altText: 'Energia Zen', descricao: 'Descrição do produto', preco: 'R$10,00' },
    { id: 7, link: '#', imageUrl: 'catalogo_masculino.png', altText: 'Energia Zen', descricao: 'Descrição do produto', preco: 'R$10,00' },
    { id: 8, link: '#', imageUrl: 'catalogo_masculino.png', altText: 'Energia Zen', descricao: 'Descrição do produto', preco: 'R$10,00' },
    { id: 9, link: '#', imageUrl: 'catalogo_masculino.png', altText: 'Energia Zen', descricao: 'Descrição do produto', preco: 'R$10,00' },
    { id: 10, link: '#', imageUrl: 'catalogo_masculino.png', altText: 'Energia Zen', descricao: 'Descrição do produto', preco: 'R$10,00' },
    { id: 11, link: '#', imageUrl: 'catalogo_masculino.png', altText: 'Energia Zen', descricao: 'Descrição do produto', preco: 'R$10,00' },
    { id: 12, link: '#', imageUrl: 'catalogo_masculino.png', altText: 'Energia Zen', descricao: 'Descrição do produto', preco: 'R$10,00' }
  ];

  const mostrarMais = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Aumenta a contagem de produtos visíveis
  };
  

  return (
    <section>
    <div className="container">
      <div className="card">
        {produtos.slice(0, visibleCount).map((produto) => (
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
                <CiShoppingCart />
                {successMessage === produto.id ? ' Adicionado com sucesso' : ' Adicionar ao carrinho'}
              </button>
            </div>
          </div>
        ))}
      </div>
    
    </div>

    {visibleCount < produtos.length && (
        <button className="ver_mais" onClick={mostrarMais}>Ver Mais</button>
      )}
  </section>

  
);
}


export default GaleriaMasc;
