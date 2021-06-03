import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import ProductDetails from './pages/ProductDetails/ProductDetails';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <section className="App__wrapper">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/products/:productId" component={ProductDetails} />
          </Switch>
        </section>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
