import React, { useState } from "react";

const ItemCount = ({ stock }) => {
  const [cartCount, setCartCount] = useState(0); // Estado para la cantidad en el carrito

  const handleAddToCart = () => {
    // Verificar si la cantidad en el carrito es menor que el stock
    if (cartCount < stock) {
      // Aquí puedes agregar la lógica para agregar el producto al carrito
      setCartCount(cartCount + 1);
    }
  };

  const handleRemoveFromCart = () => {
    // Aquí puedes agregar la lógica para eliminar el producto del carrito
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleRemoveFromCart} disabled={cartCount === 0}>
          &#8722;
        </button>
        <span style={{ margin: "0 10px" }}>{cartCount}</span>
        <button onClick={handleAddToCart} disabled={cartCount >= stock}>
          +
        </button>
      </div>
      <p>Agregar al carrito</p>
    </div>
  );
};

export default ItemCount;
