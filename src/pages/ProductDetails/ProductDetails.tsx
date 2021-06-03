import { useEffect, useState } from 'react';

import { ProductInterface } from '../../components/Product/Product';

import useNav from '../../hooks/useNav';

import ChevronRight from '../../assets/chevron-right-arrow.svg';
import Ratings from '../../assets/ratings.svg';
import CommentUser from '../../assets/comment-user.svg';

import { products } from '../../products';

import './ProductDetails.scss';

const ProductDetails: React.FC<ProductInterface> = () => {
  const { currentPath } = useNav();
  const [activeProduct, setActiveProduct] = useState<ProductInterface>({
    stock: 0,
    description: '',
    id: '',
    image: '',
    name: '',
    price: '',
  });

  useEffect(() => {
    const [, , productId] = currentPath.split('/');

    const product = products.find(
      (product: ProductInterface) => (product.id = productId)
    );

    if (!product) return;

    setActiveProduct(product);
  }, [currentPath]);

  return (
    <section className="product-details">
      <img
        src={activeProduct.image}
        alt="Product"
        className="product-details__image"
      />

      <div className="product-details__name-section">
        <p>{activeProduct?.name}</p>

        <p className="product-details__description">
          {activeProduct?.description}
        </p>

        <p className="product-details__price">
          {activeProduct?.price} / <span>Piece</span>
        </p>
      </div>

      <div className="product-details__description-section">
        Product Description <img src={ChevronRight} alt="chevron right" />
      </div>

      <div className="product-details__review-section">
        <header>
          <p>Review and Ratings</p>
          <p>View all</p>
        </header>

        <p className="product-details__ratings">
          <img src={Ratings} alt="Ratings" /> 3.0
        </p>

        <article className="product-details__comments">
          <p>
            This is the best product I have used in a long while and the size
            fits perfectly and I love the colors!!!!!
          </p>

          <img src={CommentUser} alt="comment user" />
        </article>
      </div>
    </section>
  );
};

export default ProductDetails;
