import React, { Component } from "react";
import './App.css';
// React router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// componentes
import MiTienda from './components/MiTienda';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import * as CartProvider from "./components/Context/CartProvider";
import Carrito from "./components/carrito/Carrito";
import Checkout from "./components/Checkout";
// pages
import ContactoPage from "./Pages/ContactoPage/ContactoPage";
import HomePage from "./Pages/HomePage/HomePage";
import QuienesSomosPage from "./Pages/QuienesSomosPage/QuienesSomosPage";
import ItemPage from "./Pages/ItemPage/ItemPage";
import CategoriaPage from "./Pages/CategoriaPage/CategoriaPage";
import ShopPage from "./Pages/ShopPage/ShopPage";

class App extends Component {

  render() {
    return (
      <Router>
           <CartProvider.CartProvider>
      <div className="app">
        <MiTienda
          titulo="NEHUEN"
          subtitulo="TODO LO QUE TE GUSTA"
        />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/quienes_somos" element={<QuienesSomosPage />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="/user-tipo/:tipo" element={<CategoriaPage />} />
          <Route path="/Shop" element={<ShopPage />} />
          <Route path="/carrito" element={<Carrito />}/>
          <Route path="/checkout" element={<Checkout />}/>
          </Routes>

      
        <ItemListContainer greeting="Gracias por visitar nuestra página"/> 
      </div>
      </CartProvider.CartProvider>
      </Router>
    );
  }
}

export default App;
