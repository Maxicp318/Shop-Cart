import "./App.css";
import ListaFrutas from "./components/Card/listadoFrutas";
import { Button } from "@mui/material";
import Cart from "./components/cart/cart";
import { useState } from "react";
import AreaCart from "./components/cart/areaCart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Comprar from './components/compra'
// import BtnScroll from './components/buttonScroll';

function App() {
  
  const [cantCarrito, setCantCarrito] = useState(0);

  // Actualizar la cantidad en el carrito cuando se hace clic en el botón de agregar
  const handleAgregarClick = () => {
    setCantCarrito(cantCarrito + 1);
  };

  return (
    <Router>
      <div className="containerApp">
        <header>
          <Link to={"/cart"}>
            <Button className="btn" variant="contained">
              <Cart cant={cantCarrito} />
            </Button>
          </Link>
          <h1 className="h1">Ventadefrutas.com</h1>
          <p>Tu tienda saludable, dulce, y natural.</p>
        </header>
        <main>
          <Routes>
            <Route
              exact
              path="/"
              element={<ListaFrutas agregarCantDesdeApp={handleAgregarClick} />}
            />
            <Route path="/cart" element={<AreaCart />} />
            <Route exact path="/comprar" element={<Comprar />} />
            {/* <BtnScroll /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
