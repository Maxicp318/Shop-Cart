export const obtenerArrayDesdeLocalStorage = () => {
  const arrayAlmacenado = localStorage.getItem("carrito");
  return arrayAlmacenado ? JSON.parse(arrayAlmacenado) : [];
};

export const eliminarElementoPorId = (miArray, idAEliminar, setMiArray) => {
  const nuevosDatos = miArray.filter((item) => item.id !== idAEliminar);
  setMiArray(nuevosDatos);
  localStorage.setItem("carrito", JSON.stringify(nuevosDatos));
};

export const actualizarCantidad = (miArray, id, nuevaCantidad, setMiArray) => {
  const nuevosDatos = miArray.map((item) => {
    if (nuevaCantidad > 0) {
      if (item.id === id) {
        return { ...item, cant: nuevaCantidad };
      }
    }
    return item;
  });

  setMiArray(nuevosDatos);
  localStorage.setItem("carrito", JSON.stringify(nuevosDatos));
};

export const calcularPrecioTotal = (miArray) => {
  return miArray.reduce((total, item) => total + item.precio * item.cant, 0);
};