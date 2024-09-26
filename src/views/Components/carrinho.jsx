import React from 'react';


function Carrinho({ compras, setCarrinho }) {
  const calcularTotal = () => {
    return compras.reduce((total, compra) => total + parseFloat(compra.preco.replace('R$', '').replace(',', '.')), 0).toFixed(2);
  };

  const handleDelete = (index) => {
    const updatedData = compras.filter((_, i) => i !== index);
    setCarrinho(updatedData);
  };

  return (
    <>
      <h1 className="titulo-carrinho">CARRINHO</h1>
      <section className="carrinho">
        <div className="container">
          {compras.length === 0 ? (
            <p className="vazio">Seu carrinho está vazio</p>
          ) : (
            <div className="carrinho-lista">
              <div className="carrinho-header">
                <span>Item</span>
                <span>Preço</span>
                <span>Quantidade</span>
              </div>
              {compras.map((compra, index) => (
                <div className="carrinho-item" key={index}>
                  <img src={compra.imageUrl} alt={compra.altText} className="carrinho-item-imagem" />
                  <div className="carrinho-item-info">
                    <h3 className="carrinho-item-nome">{compra.altText}</h3>
                    <p className="carrinho-item-descricao">{compra.descricao}</p>
                  </div>
                  <div className="carrinho-item-preco">{compra.preco}</div>
                  <div className="carrinho-item-quantidade">
                    <input type="number" defaultValue="1" className="quantidade-input" />
                  </div>
                  <button className="remover-button" onClick={() => handleDelete(index)}> Remover </button>
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
    </>
  );
}

export default Carrinho;

