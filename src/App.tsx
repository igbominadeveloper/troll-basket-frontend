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

import './App.scss';

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

      <section>
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
          <p>
            <img src={ProductCategories} alt="Product Categories" />
            Product Categories
          </p>

          <p>
            <img src={PopularProducts} alt="Popular Products" />
            Popular Products
          </p>

          <p>
            <img src={RecommendedProducts} alt="Recommended Products" />
            Recommended Products
          </p>

          <p>
            <img src={PopularShops} alt="Popular Shops" />
            Shops
          </p>
        </section>
      </section>
      {/* Nav goes here */}
      {/* router components go here  */}
    </div>
  );
}

export default App;
