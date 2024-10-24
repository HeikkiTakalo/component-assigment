import React, { useState } from 'react';

const Product = () => {
  const products = [
    { name: 'Asus GeForce RTX 4060', price: 299 },
    { name: 'Asus GeForce RTX 4070 Ti SUPER', price: 919 },
    { name: 'Gigabyte GeForce RTX 4070', price: 589 },
    { name: 'Gigabyte GeForce RTX 3060 OC', price: 289 },
    { name: 'Asus Radeon RX 7900 XTX', price: 999 },
    { name: 'Asus Radeon RX 7700 XT DUAL', price: 429 },
  ];

  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleProductChange = (event) => {
    const index = parseInt(event.target.value);
    setSelectedProductIndex(index);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-form">
      <div>
        <h3>Select product</h3>
        <label className="product-label">Product:</label>
        <select value={selectedProductIndex} onChange={handleProductChange}>
          {products.map((product, index) => (
            <option key={index} value={index}>
              {product.name}
            </option>
          ))}
        </select>
      </div>
      <br />
      <div>
        <label className="product-label">Quantity:</label>
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>
    </div>
  );
};

export default Product;
