import React from 'react';
import { FaTrash } from 'react-icons/fa';
import '../css/index.css';

function Carrinho({ compras, setCarrinho }) {
  const calcularTotal = () => {
    return compras.reduce((total, compra) => {
      const preco = parseFloat(compra.preco.replace('R$', '').replace(',', '.'));
      return total + preco;
    }, 0).toFixed(2);
  };

  const handleDelete = (id) => {
    const updatedData = compras.filter(compra => compra.id !== id);
    setCarrinho(updatedData);
  };

  return (
    <section className="carrinho">
      <div className="container">
        {compras.length === 0 ? (
          <p className="vazio">Seu carrinho está vazio</p>
        ) : (
          <div className="carrinho-lista">
            {compras.map((compra) => (
              <div className="carrinho-item" key={compra.id}>
                <img src={compra.imageUrl} alt={compra.altText} className="carrinho-item-imagem" />
                <div className="carrinho-item-info">
                  <h3 className="carrinho-item-nome">{compra.altText}</h3>
                  <p className="carrinho-item-descricao">{compra.descricao}</p>
                  <div className="carrinho-item-preco">{compra.preco}</div>
                </div>
                <FaTrash onClick={() => handleDelete(compra.id)} />
              </div>
            ))}
            <div className="carrinho-resumo">
              <h3>Total:</h3>
              <span className="carrinho-total">R${calcularTotal()}</span>
              <button className="carrinho-finalizar">Finalizar Compra</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Carrinho;

