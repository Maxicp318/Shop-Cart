import { Button } from "@mui/material";
import styles from "./areaCart.module.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { useEffect, useState } from "react";
import { obtenerArrayDesdeLocalStorage, eliminarElementoPorId, actualizarCantidad, calcularPrecioTotal } from "../utils/logicAreaCart";

// eslint-disable-next-line react/prop-types
const AreaCart = () => {

  const [total, setTotal] = useState();
  const [miArray, setMiArray] = useState(obtenerArrayDesdeLocalStorage);

  const handleEliminarElemento = (idAEliminar) => {
    eliminarElementoPorId(miArray, idAEliminar, setMiArray);
  };

  const handleActualizarCantidad = (id, nuevaCantidad) => {
    
    actualizarCantidad(miArray, id, nuevaCantidad, setMiArray);
    
  };

  useEffect(() => {
    const precioTotal = calcularPrecioTotal(miArray);
    setTotal(precioTotal)  
  },[miArray]);

  return (
    <div className={styles.containerCart}>
      <ul className={styles.ul}>
        {miArray.map(
          (c) => (
            <li className={styles.li} key={c.id}>
              <Button className={styles.btnCount} variant="contained" onClick={() => handleEliminarElemento(c.id)}>
                X
              </Button>
              <p className={styles.prod}>
                {c.imagen} {c.nombre} ${c.precio} Cant:{c.cant}
              </p>
              <Button className={styles.btnCount} variant="contained" onClick={() => 
                handleActualizarCantidad(c.id, c.cant + 1)}>
                +
              </Button>
              <Button className={styles.btnCount} variant="contained" onClick={() => 
                handleActualizarCantidad(c.id, c.cant - 1)}>
                -
              </Button>
            </li>
          )
        )}
      </ul>
      <p>total a pagar ${total}</p>
      <Link className={styles.btn} to={'/comprar'}>
        <Button variant="contained" >Comprar</Button>
      </Link>
      <Link to={"/"}>
        <Button className={styles.btnInicio} variant="contained">
          <HomeIcon />
        </Button>
      </Link>
    </div>
  );
};

export default AreaCart;
