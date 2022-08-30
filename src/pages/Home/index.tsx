import Navbar from 'components/Navbar';
import { ReactComponent as MainImage } from 'assets/images/car.svg'
import './styles.css';
import ButtonIcon from 'components/ButtonIcon';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <h1>O carro perfeito para você</h1>
            <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
      </div>
      <div className="button-container">
      <ButtonIcon />
      <div>
        <h5>Comece agora a navegar</h5>
      </div>
      </div>
    </>
  );
}
export default Home;