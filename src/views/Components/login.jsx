import React, { useState } from 'react';


function Login({ handleMostrarCadastro }) {
  return (
    <>
      <div className="container_form">
        <div className="formulario">
          <form>
            <h1> LOGIN </h1>
            <input type="text" name="Email" id="email" placeholder="E-mail" className="input_login" />
            <input type="password" name="Senha" id="senha" placeholder="Senha" className="input_login" />
            <button className="button_login"> Login </button>
            <div className="link_cadastro">
              <p>Não possui uma Conta? </p>
              <button onClick={handleMostrarCadastro}>Realizar Cadastro</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

function Cadastro({ handleMostrarLogin }) {
  return (
    <>
      <div className="container_form">
        <div className="formulario">
          <form>
            <h1> Cadastro </h1>
            <input type="text" name="nome" id="nome" placeholder="Nome" className="input_login" />
            <input type="text" name="Email" id="email" placeholder="E-mail" className="input_login" />
            <input type="text" name="cpf" id="cpf" placeholder="CPF" className="input_login" />
            <input type="text" name="telefone" id="telefone" placeholder="Telefone" className="input_login" />
            <input type="password" name="Senha" id="senha" placeholder="Senha" className="input_login" />
            <button className="button_login"> Cadastrar </button>
            <div className="link_cadastro">
              <p>Possui uma conta? </p>
              <button onClick={handleMostrarLogin} >Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default function LoginPage() {
  const [mostrarCadastro, setMostrarCadastro] = useState(false);

  const handleMostrarCadastro = () => {
    setMostrarCadastro(true);
  };

  const handleMostrarLogin = () => {
    setMostrarCadastro(false);
  };

  return (
    <>
      {mostrarCadastro ? (
        <Cadastro handleMostrarLogin={handleMostrarLogin} />
      ) : (
        <Login handleMostrarCadastro={handleMostrarCadastro} />
      )}
    </>
  );
}