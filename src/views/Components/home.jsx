import '../css/index.css';
import Carrossel from './carrossel';
import Destaques from './destaques';


function Home({ setCarrinho }) {
    return (
        <>
            <div className='App'>
                <div className="carrossel">
                    <Carrossel />
                </div>
                <Destaques setCarrinho={setCarrinho} />
            </div>
        </>
    );
}

export default Home;
