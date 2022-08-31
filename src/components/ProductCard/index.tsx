import ProductImg from 'assets/images/car-card 1.png';
import './styles.css';

const ProductCard = () => {

    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={ProductImg} alt="Modelo do carro" />
            </div>
            <div className="card-bottom-container">
                <h6>Audi Supra TT</h6>
                <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                </div>
                <div>
                    <button className="btn btn-info">Comprar</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;