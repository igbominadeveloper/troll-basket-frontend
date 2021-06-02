import './Footer.scss';

import Home from '../../assets/home.svg';
import Buy from '../../assets/buy.svg';
import Deals from '../../assets/price-tag.svg';
import Wallet from '../../assets/wallet.svg';
import MoreOptions from '../../assets/more-options.svg';

const Footer: React.FC = () => (
  <footer className="footer">
    <nav>
      <li>
        <img src={Home} alt="Home" />
        <p>Home</p>
      </li>

      <li className="footer__active">
        <img src={Buy} alt="Buy" />
        <p>Buy</p>
      </li>

      <li>
        <img src={Deals} alt="Deals" />
        <p>Deals</p>
      </li>

      <li>
        <img src={Wallet} alt="Wallet" />
        <p>Wallet</p>
      </li>

      <li>
        <img src={MoreOptions} alt="More Options" />
        <p>More</p>
      </li>
    </nav>
  </footer>
);

export default Footer;
