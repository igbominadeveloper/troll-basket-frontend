import { Link } from 'react-router-dom';

import './Product.scss';

export interface ProductInterface {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  stock: number;
}

const Product: React.FC<ProductInterface> = ({
  image,
  description,
  price,
  stock,
  id,
}) => {
  return (
    <Link className="Product" to={`/products/${id}`}>
      <img src={image} className="Product__banner" alt="Product banner" />

      <p className="Product__details">{description}</p>

      <div className="Product__price">
        <p>{price}</p>
      </div>

      <p className="Product__meta">MOQ {stock} (pieces)</p>
    </Link>
  );
};

export default Product;
