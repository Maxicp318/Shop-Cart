import "./App.css";
import ListaFrutas from "./components/Card/listadoFrutas";
import AreaCart from "./components/cart/areaCart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Comprar from './components/compra'

function App() {
  
  return (
    <Router>
      <div className="containerApp">
        <header>
          <h1 className="h1">Ventadefrutas.com</h1>
          <p>Tu tienda saludable, dulce, y natural.</p>
        </header>
        <main>
          <Routes>
            <Route
              exact
              path="/"
              element={<ListaFrutas />}
            />
            <Route path="/cart" element={<AreaCart />} />
            <Route exact path="/comprar" element={<Comprar />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
