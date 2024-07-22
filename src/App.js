import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Header from './components/Header';
import HeaderFR from './components/HeaderFR'; // Import HeaderFR
import HomePage from './components/HomePage';
import ShopPage from './components/ShopPage';
import AboutUs from './components/AboutUs';
import AboutUsFR from './components/AboutUsFR'; // Import AboutUsFR
import ProductPage from './components/ProductPage';
import OrderDetailsPage from './components/OrderDetailsPage';
import CustomerSupportPage from './components/CustomerSupportPage';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import ConfirmationPage from './components/ConfirmationPage';
import InteractWithUs from './components/InteractWithUs';
import { CartProvider } from './CartContext';
import './App.css';

const EnglishLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const FrenchLayout = () => (
  <>
    <HeaderFR />
    <Outlet />
  </>
);

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<EnglishLayout />}>
              <Route index element={<HomePage />} />
              <Route path="shop" element={<ShopPage />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="product/:id" element={<ProductPage />} />
              <Route path="order-details" element={<OrderDetailsPage />} />
              <Route path="customer-support" element={<CustomerSupportPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="confirmation" element={<ConfirmationPage />} />
              <Route path="interact" element={<InteractWithUs />} />
            </Route>
            <Route path="/about-fr" element={<FrenchLayout />}>
              <Route index element={<AboutUsFR />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
