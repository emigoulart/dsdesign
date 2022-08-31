import ProductCard from "components/ProductCard";
import SearchButton from "components/SearchButton";
import { Link } from "react-router-dom";
import './styles.css';

const Catalog = () => {
  return (
    <>
    <div>
    <div>
      <div className="top-container">
      <textarea> Digite sua busca</textarea>
          <div>
            <Link to="/products">
              <SearchButton />
            </Link>
          </div>
        </div>
      </div> 
          <div className="container my-4">
            <div className="row">
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <ProductCard />
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <ProductCard />
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <ProductCard />
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <ProductCard />
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Catalog;