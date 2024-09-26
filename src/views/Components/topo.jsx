import React, { useState } from 'react';
import Home from './home'; 
import LoginPage from './login';
import Sobre from './sobre';
import Carrinho from './carrinho';
import '../css/index.css'; 

const Topo = () => {
  const [secaoAtual, setSecaoAtual] = useState('home');
  const [menuAberto, setMenuAberto] = useState(false);
  const [carrinho, setCarrinho] = useState([]); // Estado do carrinho

  const cliqueSecao = (secao) => {
    setSecaoAtual(secao);
    setMenuAberto(false);  
  };

  return (
    <>
      <header>
        <img src="logo.png" alt="logo da Energia Zen" className="logo" />
        <div 
          className="menu-toggle" 
          id="menu-toggle" 
          onClick={() => setMenuAberto(!menuAberto)}
          aria-expanded={menuAberto}
          aria-controls="navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        
        <nav className={`navigation ${menuAberto ? 'active' : ''}`} id="navigation">
          <ul>
            <li onClick={() => cliqueSecao('home')} className='botao-menu'> HOME </li>
            <li onClick={() => cliqueSecao('login')} className='botao-menu'> LOGIN </li>
            <li onClick={() => cliqueSecao('sobre')} className='botao-menu'> SOBRE </li>
            <li onClick={() => cliqueSecao('carrinho')} className='botao-menu'> CARRINHO </li>
          </ul>
        </nav>
      </header>

      <div>
      {secaoAtual === 'home' && (
    <div className='secao'>
        <Home setCarrinho={setCarrinho} />
    </div>
)}

    
        {secaoAtual === 'login' && (
          <div className='secao'>
            <LoginPage />
          </div>
        )}

        {secaoAtual === 'sobre' && (
          <div className='secao'>
            <Sobre />
          </div>
        )}

        {secaoAtual === 'carrinho' && (
          <div className='secao'>
            <Carrinho compras={carrinho} setCarrinho={setCarrinho} />
          </div>
        )}
      </div>
    </>
  );
}

export default Topo;
