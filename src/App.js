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
import CookieConsent from "./Components/CookieConsent/CookieConsent"

const App = () => {
  return (
    <Router>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bouquets" element={<Bouquets />} />
        <Route path="/config" element={<Configurator />} />
        <Route path="/balloons" element={<Balloons />} />
        <Route path="/bloomandboxes" element={<BloomAndBubbles />} />
        <Route path="/funeral" element={<Funeral />} />
        <Route path="/hatboxes" element={<HB />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <CookieConsent/>
      <Cart />
      <Alert />
    </Router>
  );
};

export default App;
