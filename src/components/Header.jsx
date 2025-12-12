import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { CarritoContext } from '../context/CarritoContext';

import Navbar from './Nav';
import styles from './Header.module.css';
import BarraBusqueda from "./BarraBusqueda";

import BagIcon from '../assets/BagIcon';
import ColorMode from '../assets/ColorMode';


const Header = () => {
  const { carrito } = useContext(CarritoContext);
  const { usuario, logout } = useAuthContext();

  const contadorEnCarrito = carrito.length;
  const estaLogeado = !!usuario;

  const esAdmin = usuario?.rol === 'admin'; 


  return (
    <header className="navbar justify-content-sm-center justify-content-md-around justify-content-lg-between mx-5 ">
      
      {/* IZQUIERDA Logo */}
      <div className={styles.logo}>
        <Link to="/">Zera</Link>
      </div>

      {/* CENTRO Componente NavBar */}
      <div className={styles.navbarContainer}>
        <Navbar />
      </div>

      {/* DERECHA Iconos */}
      <div className="d-sm-none d-md-flex d-lg-flex flex-row flex-wrap gap-2 align-items-center">
        
      <BarraBusqueda />

        {/* { estaLogeado ? 
          <button onClick={logout} className="btn mx-1 btn-close-light border-dark">Cerrar Sesion </button> 
          :
          <Link to="/login">
            <button className="btn mx-1 btn-dark">Ingresa</button>
          </Link>
        } */}

        { estaLogeado ? 
          <>
            {/* Si es admin, hacer el nombre clickeable, si no, solo texto */}
            {esAdmin ? (
              <Link 
                to="/admin" 
                className="hidden md:inline text-sm font-medium text-[#333] hover:underline transition-all duration-200 cursor-pointer"
              >
                Hola, {usuario.nombre}
              </Link>
            ) : (
              <span className="hidden md:inline text-sm font-medium text-[#333]">
                Hola, {usuario.nombre}
              </span>
            )}
            
            <button 
              onClick={logout} 
              className="hidden md:flex justify-center rounded-md border border-white bg-black px-3 py-1.5 text-sm font-semibold text-white hover:bg-[#333] transition-colors duration-200"
            >
              Cerrar Sesión
            </button>
        </>
          :
          <Link to="/login">
            <button className="btn mx-1 btn-dark">Ingresa</button>
          </Link>
        }



        <div className={styles.iconoDeCarrito}>
          <Link to="/carrito">
            <BagIcon className={styles.icono} />
            {contadorEnCarrito > 0 && (
              <span className={styles.contadorDeCarrito}>
                {contadorEnCarrito}
              </span>
            )}
          </Link>
        </div>
        <div className={styles.iconoDeCarrito}>
          <ColorMode/>
        </div>
      </div>
    </header>   
  );
};

export default Header;
