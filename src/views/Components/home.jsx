import '../css/index.css';
import Carrossel from './carrossel';
import Destaques from './destaques';



function Home () {

    return(
        <>
        <div className='App'>
        <div className="carrossel">
            <Carrossel />
        </div>
        <Destaques />
        </div>
        </>
        
    );
}

export default Home