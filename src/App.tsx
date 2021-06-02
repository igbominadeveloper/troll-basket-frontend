import { useEffect, useRef } from 'react';

import Header from './components/Header/Header';

import Search from './assets/search.svg';
import Banner from './assets/banner.svg';
import BannerOrange from './assets/banner-orange.svg';
import BannerBlue from './assets/banner-blue.svg';
import ProductCategories from './assets/product-categories.svg';
import PopularProducts from './assets/popular-products.svg';
import RecommendedProducts from './assets/recommended-products.svg';
import PopularShops from './assets/popular-shops.svg';

import products from './products.json';

import './App.scss';
import Product, { ProductProps } from './components/Product/Product';

function App() {
  const banner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // if (!banner) return;
    // if (!banner.current) return;
    // banner?.current?.scroll(300, 0);
  }, []);

  return (
    <div className="App">
      <Header />

      <section className="App__wrapper">
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
          {products.map((product: ProductProps) => (
            <Product
              key={product.name}
              description={product.description}
              image={product.image}
              id={product.id}
              price={product.price}
              stock={product.stock}
              name={product.name}
            />
          ))}
        </section>
      </section>
    </div>
  );
}

export default App;
