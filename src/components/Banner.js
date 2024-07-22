import React from 'react';
import './Banner.css';

const featuredItems = [
  { id: 1, name: 'Jersey', price: 50, imageUrl: '/images/jersey.png', description: 'High-quality team jersey made from breathable fabric.' },
  { id: 2, name: 'Mouse', price: 50, imageUrl: '/images/mouse.png', description: 'Precision gaming mouse.' },
  { id: 3, name: 'Sweater', price: 60, imageUrl: '/images/sweater.png', description: 'Warm and comfortable team sweater.' },
];

function Banner() {
  return (
    <div className="banner">
      <img src="/images/banner.png" alt="Banner" className="banner-image" />
      <div className="banner-description">
        <h2>Welcome to Ten Guys Esports</h2>
        <p>
          We are dedicated to providing the best esports merchandise for our fans. Our team is passionate about gaming and we strive to support our community through high-quality products and excellent customer service.
        </p>
      </div>
      <div className="featured-items-section">
        <h2>Featured Items</h2>
        <div className="featured-items">
          {featuredItems.map(item => (
            <div key={item.id} className="featured-item">
              <img src={item.imageUrl} alt={item.name} className="featured-item-image" />
              <div className="featured-item-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
