/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import styles from './cart/areaCart.module.css'

const Comprar = () => {
  
  localStorage.removeItem('carrito')
  
  return (
    <div>
      <p>Gracias por su compra</p>
    <Link to={"/"}>
      <Button className={styles.btnInicio} variant="contained">
        <HomeIcon />
      </Button>
    </Link>
    </div>
  );
};

export default Comprar;
