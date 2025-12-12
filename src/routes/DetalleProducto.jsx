import { useState, useEffect, useContext  } from "react";
import { useParams } from "react-router-dom";
import styles from './DetalleProducto.module.css'; 
import Loading from "../assets/Loading"
import AddToCart from '../assets/AddToCart'
import { CarritoContext } from '../context/CarritoContext';

const ProductoDetalle = () => {
  
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const { agregarAlCarrito } = useContext(CarritoContext);
  const URL = "https://690d56a0a6d92d83e8512618.mockapi.io/Productos/";

  useEffect(() => {
    fetch(`${URL}${id}`)
      .then(respuesta => respuesta.json())
      .then(dato => setProducto(dato))
      .catch((error) => setError('Error al cargar el producto'))
      .finally(() => setCargando(false))
  },[id]);

  if (cargando) return <div className={styles.ripleDiv}><Loading/></div>;
  if (error) return error;
  
  return(
    <>
    <div className={styles.productoItem}>
      <h4>Detalles del Producto Nro {id}</h4>
      <h1>{producto.nombre}</h1>


      <div className={styles.imgcontainer}>
          <img className={styles.imagen} src={producto.imagen} alt={producto.nombre} width={100} height={100} />
          <button className={styles.botonAgregarProducto}  onClick={() => agregarAlCarrito(producto)}><AddToCart/></button>
      </div>
      <p>{producto.descripcion}</p>
    </div>
    </>
    
  );
}

export default ProductoDetalle;