import React, { useState } from 'react';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';
import './CheckoutPage.css';

function CheckoutPage() {
  const { cart } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [creditCardError, setCreditCardError] = useState('');
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const generateOrderNumber = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const handleCreditCardChange = (e) => {
    const value = e.target.value;
    const isValid = /^\d{4,16}$/.test(value);
    setCreditCard(value);
    setCreditCardError(isValid ? '' : 'Credit card number must be 4 to 16 digits.');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (creditCardError) {
      alert(creditCardError);
      return;
    }
    const orderNumber = generateOrderNumber();
    navigate('/confirmation', {
      state: {
        name,
        email,
        address,
        orderNumber,
        cart
      }
    });
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="cart-total">
        <h3>Grand Total: ${calculateTotal()}</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="creditCard">Credit Card:</label>
          <input
            type="text"
            id="creditCard"
            value={creditCard}
            onChange={handleCreditCardChange}
            pattern="\d{4,16}"
            required
          />
          {creditCardError && <p className="error">{creditCardError}</p>}
        </div>
        <button type="submit" className="button">Place Order</button>
      </form>
    </div>
  );
}

export default CheckoutPage;
