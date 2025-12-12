
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';

import styles from './Productos.module.css'; 
// import AddToCart from '../assets/AddToCart';

import Loading from "../assets/Loading"
import { useProductosContext } from '../context/ProductosContext';


const Productos = () => {
  // Usar el contexto 
  const { productos, cargando, error } = useProductosContext() 
  const { agregarAlCarrito } = useContext(CarritoContext);
  

  console.log(productos.value);

  if (cargando) return <div className={styles.ripleDiv}><Loading/></div>;
  if (error) return error;

  return(
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h3>Temporada 2025</h3>
      <ul className='row row-cols-1 row-cols-md-3 g-4'>
        {productos.map((producto) => (
          <div key={producto.id} class="col">
              <div class="card">
                <Link   to={`/Productos/${producto.id}`} >                
                  <img
                  alt={producto.nombre}
                  src={producto.imagen}
                  className={styles.imagen}
                  />
                </Link>
                <div class="card-body">
                  <h5 class="card-title">{producto.nombre}</h5>
                  <h3 className='text-sm font-medium text-gray-900'>$ {producto.precio}</h3>
                </div>
              </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Productos;