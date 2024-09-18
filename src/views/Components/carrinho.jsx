import React, { useEffect, useState } from 'react';
import '../css/index.css'; // Adicione o CSS necessário para estilização
import { FaTrash } from 'react-icons/fa'; 

function Carrinho() {
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    const fetchCompras = async () => {
      try {
        const response = await fetch('http://localhost:3000/compras');
        const data = await response.json();
        setCompras(data);
      } catch (error) {
        console.error('Erro ao buscar compras:', error);
      }
    };

    fetchCompras();
  }, []);

  const calcularTotal = () => {
    return compras.reduce((total, compra) => total + parseFloat(compra.preco.replace('R$', '').replace(',', '.')), 0).toFixed(2);
  };



  const handleDelete = async (e, compra) => {
    e.preventDefault();

    try {
      console.log("ID a ser deletado:", compra.id);
      const response = await fetch(`http://localhost:3000/compras/${compra.id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`Erro ao excluir compra: ${response.status}`);
      }
      const updatedData = compras.filter(item => item.id !== compra.id);
      setCompras(updatedData);
    } catch (error) {
      console.error('Erro ao excluir compra:', error);
    }
  };



  return (
    <section className="carrinho">
      <div className="container">

        {compras.length === 0 ? (
          <p className="vazio">Seu carrinho está vazio</p>
        ) : (
          <div className="carrinho-lista">
            {compras.map((compra) => (
              <><div className="carrinho-item" key={compra.id}>
                <img src={compra.imagem_url} alt={compra.nome} className="carrinho-item-imagem" />
                <div className="carrinho-item-info">
                  <h3 className="carrinho-item-nome">{compra.nome}</h3>
                  <p className="carrinho-item-descricao">{compra.descricao}</p>
                  <div className="carrinho-item-preco">{compra.preco}</div>
                </div>
                <div className="carrinho-item-quantidade">
                  <span>Quantidade:</span>
                  <input type="number" min="1" defaultValue="1" className="quantidade-input" />
                </div>
              </div>
              <FaTrash onClick={(e) => handleDelete(e, compra)} /></>
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
