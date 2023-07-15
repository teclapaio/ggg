import React, { useState, useEffect, useContext } from "react";
import CardUser from "../../components/CardUser/CardUser";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";


const ItemPage = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState([]);
  const [cartCount, setCartCount] = useState(0); // Estado para la cantidad en el carrito

  const { agregarAlCarrito } = useContext(CartContext);

  useEffect(() => {
    const getUsers = async () => {
      const q = query(collection(db, "productos"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setUserData(docs);
    };
    getUsers();
  }, [id]);

  const handleAddToCart = (productId) => {
    const product = userData.find((data) => data.id === productId);
    if (product && cartCount < product.stock) {
      agregarAlCarrito(product, 1);
      setCartCount(cartCount + 1);
      console.log(`Agregando producto ${productId} al carrito`);
    }
  };

  const handleRemoveFromCart = (productId) => {
    console.log(`Eliminando producto ${productId} del carrito`);
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  const handleAddToCartClick = () => {
    console.log("Agregando al carrito");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      {userData.map((data) => (
        <div key={data.id}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <CardUser data={data} />
            <div style={{ marginLeft: 20 }}>
              <h3>Descripción:</h3>
              <p style={{ wordWrap: "break-word", maxWidth: "300px" }}>{data.descri}</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
            <button onClick={() => handleRemoveFromCart(data.id)} disabled={cartCount === 0}>
              &#8722;
            </button>
            <span style={{ margin: "0 10px" }}>{cartCount}</span>
            <button onClick={() => handleAddToCart(data.id)} disabled={cartCount >= data.stock}>
              +
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
            <button onClick={handleAddToCartClick}>Agregar al carrito</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemPage;
