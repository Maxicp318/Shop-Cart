import frutas from "../../productos.json";
import styles from "./listaCard.module.css";
import CardFruta from "./cardFruta";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Cart from "../cart/cart";

// eslint-disable-next-line react/prop-types
function ListaFrutas({ agregarCantDesdeApp }) {
  
  const [carrito, setCarrito] = useState(() => {
    const carritoAlmacenado = localStorage.getItem("carrito");
    return carritoAlmacenado ? JSON.parse(carritoAlmacenado) : [];
  });

  const agregarCantDesdeCard = (fruta) => {
    // Agregar la fruta al carrito
    setCarrito((prevCarrito) => [...prevCarrito, fruta]);
  };

  useEffect(() => {
    // Guardar el carrito en el localStorage cada vez que cambia
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <ul className={styles.containerCards}>
      <Link className={styles.btn}  to={"/cart"}>
        <Button variant="contained">
          <Cart cant={carrito.length} />
        </Button>
      </Link>
      {frutas.map((f) => (
        <CardFruta
          key={f.id}
          fruta={f}
          agregarCantDesdeCard={agregarCantDesdeApp}
          agregarFruta={agregarCantDesdeCard}
        />
      ))}
    </ul>
  );
}

export default ListaFrutas;
