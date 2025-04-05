import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Bouquets from "./Components/Pages/Bouquets/Bouquets";
import Configurator from "./Components/Pages/Config/Config";
import Balloons from "./Components/Pages/Balloons/Balloons";
import About from "./Components/Pages/About/About";
import Checkout from "./Components/Pages/Checkout/Checkout";
import Cart from "./Components/Cart";
import BloomAndBubbles from "./Components/Pages/BloomAndBubbles/BloomAndBubbles";
import HB from "./Components/Pages/HB/HB";
import ScrollTop from "./ScrollTop";
import Alert from "./Components/Alert/Alert";
import Funeral from "./Components/Pages/Funeral/Funral";
import CookieConsent from "./Components/CookieConsent/CookieConsent";
import Success from "./Components/Pages/Success/Success";
import Cancelled from "./Components/Pages/Cancelled/Cancelled";

const App = () => {
  return (
    <Router>
      <ScrollTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bouquets' element={<Bouquets />} />
        <Route path='/config' element={<Configurator />} />
        <Route path='/balloons' element={<Balloons />} />
        <Route path='/bloomandboxes' element={<BloomAndBubbles />} />
        <Route path='/funeral' element={<Funeral />} />
        <Route path='/hatboxes' element={<HB />} />
        <Route path='/about' element={<About />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/success' element={<Success />} />
        <Route path='/cancel' element={<Cancelled />} />
      </Routes>
      <CookieConsent />
      <div className='banner-1'>
        <h2>WEBSITE LAUNCH: 6TH MAY! PRE-ORDER NOW!</h2>
      </div>
      <Cart />
      <Alert />
    </Router>
  );
};

export default App;
