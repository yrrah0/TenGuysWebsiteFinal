import React from 'react';
import { useLocation } from 'react-router-dom';
import './ConfirmationPage.css';

function ConfirmationPage() {
  const location = useLocation();
  const { name, email, address, orderNumber, cart } = location.state;

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="confirmation-page">
      <h2>Order Confirmation</h2>
      <p>Thank you for your order, {name}!</p>
      <p>Your order number is: <strong>{orderNumber}</strong></p>
      <p>Estimated delivery time: <strong>3 business days</strong></p>
      <h3>Order Details</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Address:</strong> {address}</p>
      <h3>Purchased Items</h3>
      <table className="confirmation-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-total">
        <h3>Grand Total: ${calculateTotal()}</h3>
      </div>
    </div>
  );
}

export default ConfirmationPage;
