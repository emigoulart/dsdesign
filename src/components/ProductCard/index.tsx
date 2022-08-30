import './styles.css';

import ProductImg from 'assets/images/car-card 1.png';

const ProductCard = () => {

    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={ProductImg} alt="Nome do produto" />
            </div>
            <div className="card-bottom-container">
                <h6>Audi Supra TT</h6>
            </div>
        </div>
    );
}

export default ProductCard;