import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import './ShopPage.css';

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
];

function ShopPage() {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('name');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortType(event.target.value);
  };

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortType === 'price') {
        return a.price - b.price;
      } else {
        return 0;
      }
    });

  return (
    <div className="shop-page">
      <h2>Shop</h2>
      <div className="controls">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={sortType} onChange={handleSortChange}>
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
            </Link>
            <button className="button" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
