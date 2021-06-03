import { Link } from 'react-router-dom';

import useNav from '../../hooks/useNav';

import './Header.scss';

import Location from '../../assets/location.svg';
import Orders from '../../assets/orders.svg';
import Cart from '../../assets/cart.svg';
import BackButton from '../../assets/back-button.svg';
import SearchWithBg from '../../assets/search-with-bg.svg';

export default function Header() {
  const { pathIsHomepage, currentPath } = useNav();

  return (
    <header className="Header">
      <section className="Header__navigation">
        {pathIsHomepage ? (
          <>
            <p className="Header__navigation--text">Trollbasket</p>

            <div className="Header__navigation--quick-links">
              <p>
                <img src={Location} alt="Location" />
                <select>
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">Abuja</option>
                  <option value="Ilorin">Ilorin</option>
                  <option value="Akure">Akure</option>
                </select>
              </p>
              <p>
                <img src={Orders} alt="Orders" />
                My Orders
              </p>
              <p>
                <img src={Cart} alt="Cart" />
                Cart
              </p>
            </div>
          </>
        ) : (
          <section className="Header__secondary-navigation">
            <Link to="/">
              <img src={BackButton} alt="Back Button" />
            </Link>

            <p>{currentPath.includes('/cart') ? 'Cart' : 'Details'}</p>

            <div className="Header__secondary-navigation--right">
              <img
                src={SearchWithBg}
                alt="Search Button"
                className="Header__secondary-navigation--right-search"
              />
              <img src={Cart} alt="Cart" />
            </div>
          </section>
        )}
      </section>
    </header>
  );
}
