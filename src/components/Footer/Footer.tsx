import { Link } from 'react-router-dom';

import useNav from '../../hooks/useNav';

import './Footer.scss';

import Home from '../../assets/home.svg';
import Buy from '../../assets/buy.svg';
import Deals from '../../assets/price-tag.svg';
import Wallet from '../../assets/wallet.svg';
import MoreOptions from '../../assets/more-options.svg';

const Footer: React.FC = () => {
  const { pathIsHomepage } = useNav();

  return (
    <footer className="footer">
      {pathIsHomepage ? (
        <nav className="footer__main-menu">
          <Link to="/" className="footer__nav-link">
            <img src={Home} alt="Home" />
            <p>Home</p>
          </Link>

          <Link to="/" className="footer__nav-link footer__active">
            <img src={Buy} alt="Buy" />
            <p>Buy</p>
          </Link>

          <Link to="/" className="footer__nav-link">
            <img src={Deals} alt="Deals" />
            <p>Deals</p>
          </Link>

          <Link to="/" className="footer__nav-link">
            <img src={Wallet} alt="Wallet" />
            <p>Wallet</p>
          </Link>

          <Link to="/" className="footer__nav-link">
            <img src={MoreOptions} alt="More Options" />
            <p>More</p>
          </Link>
        </nav>
      ) : (
        <nav className="footer__product-menu">
          <button className="footer__product-menu--add-to-cart">
            Add to Cart
          </button>

          <button className="footer__product-menu--add-to-wishlist">
            Wishlist
          </button>
        </nav>
      )}
    </footer>
  );
};

export default Footer;
