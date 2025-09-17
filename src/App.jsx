import "./App.css";
import Home from "./pages/home/home";
import "./css/vars.css";
import Catalogue from "./pages/catalogue/catalogue";
import Tubitos from "./pages/tubitos/tubitos";
import HowToBuy from "./pages/how-to-buy/how-to-buy";
import AboutUs from "./pages/about-us/about-us";
import Contact from "./pages/contact/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/tubitos" element={<Tubitos />} />
        <Route path="/how-to-buy" element={<HowToBuy />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
