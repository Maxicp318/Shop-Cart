/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import styles from "./cardFruta.module.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState } from "react";

function CardFrutas({ fruta, agregarCantDesdeCard, agregarFruta }) {

  const [itsInCart, setItsInCart] = useState(false);

  const handleAgregarAlCarrito = () => {
    if (!itsInCart) {
      // Si el producto no está en el carrito, agrégalo
      agregarFruta(fruta);
      agregarCantDesdeCard();
      setItsInCart(true);
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.img}>{fruta.imagen}</div>
      <h2 className={styles.nombre}>{fruta.nombre}</h2>
      <p>
        <strong>${fruta.precio}</strong>
      </p>
      <Button onClick={handleAgregarAlCarrito} variant="contained">
        <AddShoppingCartIcon />
      </Button>
    </div>
  );
}

export default CardFrutas;
