import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../CartContext';
import './ProductPage.css';

const products = [
  { id: 1, name: 'Jersey', price: 50, imageUrl: '/images/jersey.png', description: 'High-quality team jersey made from breathable fabric.' },
  { id: 2, name: 'Hat', price: 20, imageUrl: '/images/hat.png', description: 'Stylish hat with the Ten Guys logo.' },
  { id: 3, name: 'Mousepad', price: 15, imageUrl: '/images/mousepad.png', description: 'Smooth and durable mousepad perfect for gaming.' },
  { id: 4, name: 'Sweater', price: 60, imageUrl: '/images/sweater.png', description: 'Warm and comfortable team sweater.' },
  { id: 5, name: 'T-Shirt', price: 25, imageUrl: '/images/tshirt.png', description: 'Comfortable cotton T-shirt with team logo.' },
  { id: 6, name: 'Pants', price: 45, imageUrl: '/images/pants.png', description: 'Stylish and comfortable pants.' },
  { id: 7, name: 'Cup', price: 10, imageUrl: '/images/cup.png', description: 'Team-branded cup for your favorite drinks.' },
  { id: 8, name: 'Keyboard', price: 100, imageUrl: '/images/keyboard.png', description: 'High-performance gaming keyboard.' },
  { id: 9, name: 'Mouse', price: 50, imageUrl: '/images/mouse.png', description: 'Precision gaming mouse.' },
  { id: 10, name: 'Lanyard', price: 5, imageUrl: '/images/lanyard.png', description: 'Team-branded lanyard for keys and badges.' },
  // Add more products as needed
];

function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(product => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-page container">
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button className="button" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductPage;
