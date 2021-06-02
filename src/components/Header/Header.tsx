import './Header.scss';

import BatterEtAl from '../../assets/battery-et-al.svg';
import Location from '../../assets/location.svg';
import Orders from '../../assets/orders.svg';
import Cart from '../../assets/cart.svg';

export default function Header() {
  return (
    <header className="Header">
      <section className="Header__settings">
        <p className="Header__time">9:41</p>
        <img src={BatterEtAl} alt="Battery-Et-Al" />
      </section>

      <section className="Header__navigation">
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
      </section>
    </header>
  );
}
