import "../css/index.css";


function Rodape() {
    return (

        <div className="rodape">
            <nav>
            <h1> Nossas Redes Sociais </h1>


<div className="secao_icons">
    <div className="icon">
        <a href="#" className="botao_redessociais">
        <a href="https://wa.me/send?phone=5575988530719&text=Olá, fale conosco através do WhatsApp!">
            <img src="whatsapp.svg" /> 
            </a>
        </a>
    </div>

    <div className="icon">
        <a href="#" className="botao_redessociais">
            <img src="instagram.png" /> 
        </a>
    </div>
</div>
                <div className="endereco">
                <div className="localizacao">
                <strong>Endereço:</strong> Rua das Flores, 123, Centro, Alagoinhas - Ba <br/>
                <strong>Cep:</strong> 48000-000 <br/>
                <strong>Telefone:</strong> (75)1234-5678<br/>
                </div>
                
                <div className="horario">
                    <strong>Horário de Funcionamento:</strong><br/>
                    A verificar
                </div>
                </div>

                <div className="copy">
                <p> @Copyright 2024 ENERGIAN ZEN BR. Todos os direitos reservados</p>
                </div>
            </nav>
        </div>
       

    )

} export default Rodape;