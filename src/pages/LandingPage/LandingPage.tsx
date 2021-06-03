import { useRef, useState } from 'react';

import Product, { ProductInterface } from '../../components/Product/Product';

import Search from '../../assets/search.svg';
import Banner from '../../assets/banner.svg';
import BannerOrange from '../../assets/banner-orange.svg';
import BannerBlue from '../../assets/banner-blue.svg';
import ProductCategories from '../../assets/product-categories.svg';
import PopularProducts from '../../assets/popular-products.svg';
import RecommendedProducts from '../../assets/recommended-products.svg';
import PopularShops from '../../assets/popular-shops.svg';

import { products } from '../../products';

export default function LandingPage() {
  const banner = useRef<HTMLDivElement>(null);

  const [allProducts] = useState<Array<ProductInterface>>(products);

  console.log(allProducts);

  return (
    <>
      <div className="App__search-container">
        <input type="text" placeholder="Search merchbuy" />
        <img src={Search} alt="Search Icon" />
      </div>

      <section className="App__banner-container" ref={banner}>
        <img src={BannerBlue} alt="banner" className="App__banner" />
        <img src={Banner} alt="banner" className="App__banner" />
        <img src={BannerOrange} alt="banner" className="App__banner" />
      </section>

      <section className="App__page-links">
        <article>
          <img src={ProductCategories} alt="Product Categories" />
          <p>Product Categories</p>
        </article>

        <article>
          <img src={PopularProducts} alt="Popular Products" />
          <p>Popular Products</p>
        </article>

        <article>
          <img src={RecommendedProducts} alt="Recommended Products" />
          <p>Recommended Products</p>
        </article>

        <article>
          <img src={PopularShops} alt="Popular Shops" />
          <p>Shops</p>
        </article>
      </section>

      <section className="App__products">
        {allProducts.map((product: ProductInterface) => (
          <Product key={product.id} {...product} />
        ))}
      </section>
    </>
  );
}
