import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import ProductDetail from './pages/ProductDetail';
import BuildFromScratch from './pages/BuildFromScratch';
import AboutUs from './pages/AboutUs';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import ExchangePolicy from './pages/ExchangePolicy';
import ExchangeRequest from './pages/ExchangeRequest';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/custom" element={<BuildFromScratch />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/exchange-policy" element={<ExchangePolicy />} />
          <Route path="/exchange-request" element={<ExchangeRequest />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;