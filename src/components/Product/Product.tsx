import './Product.scss';

export interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  stock: number;
}

const Product: React.FC<ProductProps> = ({
  image,
  description,
  price,
  stock,
}) => {
  return (
    <article className="Product">
      <img src={image} className="Product__banner" alt="Product banner" />

      <p className="Product__details">{description}</p>

      <div className="Product__price">
        <p>{price}</p>
      </div>

      <p className="Product__meta">MOQ {stock} (pieces)</p>
    </article>
  );
};

export default Product;
