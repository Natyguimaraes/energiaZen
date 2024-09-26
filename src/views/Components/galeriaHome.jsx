import React, { useState } from 'react';
import Item from './item';
import { CiShoppingCart } from "react-icons/ci";


function Galeria({ setCarrinho }) {
  const [successMessage, setSuccessMessage] = useState(null);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prevCarrinho) => [...prevCarrinho, produto]);
    setSuccessMessage(produto.id);
  };

  const produtos = [
    { id: 1, link: '#', imageUrl: 'img1.png', altText: 'Energia Zen', descricao: '6 Pulseiras de Bolinhas coloridas', preco: 'R$20,00' },
    { id: 2, link: '#', imageUrl: 'pulseira3.jpg', altText: 'Energia Zen', descricao: 'Pulseira infantil colorida', preco: 'R$10,00' },
    { id: 3, link: '#', imageUrl: 'pulseiraFeminina.jpg', altText: 'Energia Zen', descricao: '5 Pulseiras com Pingentes dourados', preco: 'R$20,00' },
    { id: 4, link: '#', imageUrl: 'img2.jpeg', altText: 'Energia Zen', descricao: 'Pulseira 1 linha coração', preco: 'R$10,00' },
    { id: 5, link: '#', imageUrl: 'img2.jpeg', altText: 'Energia Zen', descricao: 'Pulseira 1 linha coração', preco: 'R$18,00' },
    { id: 6, link: '#', imageUrl: 'pulseiraFeminina.jpg', altText: 'Energia Zen', descricao: '5 Pulseiras com Pingentes dourados', preco: 'R$10,00' },
    { id: 7, link: '#', imageUrl: 'pulseira3.jpg', altText: 'Energia Zen', descricao: '5 Pulseiras com Pingentes dourados', preco: 'R$10,00' },
    { id: 8, link: '#', imageUrl: 'img1.png', altText: 'Energia Zen', descricao: '6 Pulseiras de Bolinhas coloridas', preco: 'R$10,00' },
    { id: 9, link: '#', imageUrl: 'pulseira3.jpg', altText: 'Energia Zen', descricao: 'Pulseira infantil colorida', preco: 'R$10,00' },
    { id: 10, link: '#', imageUrl: 'img2.jpeg', altText: 'Energia Zen', descricao: 'Pulseira 1 linha coração', preco: 'R$10,00' },
    { id: 11, link: '#', imageUrl: 'pulseiraFeminina.jpg', altText: 'Energia Zen', descricao: '5 Pulseiras com Pingentes dourados', preco: 'R$10,00' },
    { id: 12, link: '#', imageUrl: 'img1.png', altText: 'Energia Zen', descricao: '6 Pulseiras de Bolinhas coloridas', preco: 'R$10,00' }
  ];
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
                  <CiShoppingCart />
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

export default Galeria;
