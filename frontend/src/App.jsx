import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// Import new pages
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Custom from './pages/Custom';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Footer from './components/Footer';
import About from './pages/About';
import ShippingPolicy from './pages/ShippingPolicy';
import ExchangePolicy from './pages/ExchangePolicy';
import HowToMeasure from './pages/HowToMeasure';
import MenMeasure from './pages/MenMeasure';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import ExchangeReturnRequest from './pages/ExchangeReturnRequest';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-13 pb-0"> {/* "pt-6 pb-20"-->intial Added padding at bottom to ensure footer visibility */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/exchange-policy" element={<ExchangePolicy />} />
          <Route path="/how-to-measure" element={<HowToMeasure />} />
          <Route path="/how-to-measure/men" element={<MenMeasure />} />
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/exchange-return-request" element={<ExchangeReturnRequest/>}/>
          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
