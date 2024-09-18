import React, { useState } from 'react';
import "../css/index.css";
import Galeria from './galeriaHome'; 
import GaleriaMasc from './galeriaMasculina';
import GaleriaFem from './galeriaFeminina'


function Destaques() {
    const [secaoAtual, setSecaoAtual] = useState('galeriaHome');

    const handleClick = (secao) => {
        setSecaoAtual(secao);
    };

    return (
        <div className="container_galeria">
            <div className="destaques">
                <div className="card1">
                    <div className="cardHome">
                    <img src="pulseiraFeminina.jpg" alt="Galeria Home" onClick={() => handleClick('galeriaHome')} />
                    <span onClick={() => handleClick('galeriaHome')}> HOME </span>
                    </div>
                    <div className="cardHome">
                    <img src="pulseiraMasc.jpg" alt="Galeria Masc" onClick={() => handleClick('galeriaMasculina')} />
                    <span onClick={() => handleClick('galeriaMasculina')}> MASCULINO </span>
                    </div>
                    <div className="cardHome">
                    <img src="pulseira3.jpg" alt="Galeria Femi" onClick={() => handleClick('galeriaFeminina')} />
                    <span onClick={() => handleClick('galeriaFeminina')}> FEMININO </span>
                    </div>
                </div>
            </div>
            
            {secaoAtual === 'galeriaHome' && <Galeria />}
            {secaoAtual === 'galeriaMasculina' && <GaleriaMasc />}
            {secaoAtual === 'galeriaFeminina' && <GaleriaFem />}

            
        </div>
    );
}

export default Destaques;