import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import './CartPage.css';

function CartPage() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Please add items to your cart before proceeding to checkout.');
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div className="cart-page">
      <h2>Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
              <td>${item.price * item.quantity}</td>
              <td>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>&#8722;</button> {/* Unicode for minus sign */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">
        <h3>Total: ${calculateTotal()}</h3>
      </div>
      <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default CartPage;
