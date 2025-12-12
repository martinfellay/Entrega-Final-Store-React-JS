import { Link } from "react-router-dom";
import { useContext } from 'react';
import styles from "./Header.module.css"

import BagIcon from "../assets/BagIcon";
import { CarritoContext } from '../context/CarritoContext';

import Navbar from './Nav';

const TabNav = () => {

    const { carrito } = useContext(CarritoContext);
    const contadorEnCarrito = carrito.length;

    return (
    // d-md-none
    <section className="d-none d-sm-block d-md-none">
        <nav className="fixed-bottom bg-black container-fluid p-12">
            <div className="row p-4">  

            {/* INICIO */}
            <div className="col text-center">
                <Link to="/#">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="56"
                    fill="currentColor"
                    class="bi bi-house-door"
                    viewBox="0 0 16 16"
                >
                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                </svg>
                </Link>
            </div>

            {/* BUSCAR */}
            <div className="col text-center">
                <Link To="/">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
                >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
                </Link>
            </div>

            {/* BOTON HAMBURGESA */}
            <div className="col text-center">
                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="currentColor"
                        class="bi bi-list"
                        viewBox="0 0 16 16"
                        >
                        <path
                            fill-rule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                        />
                    </svg>
                </button>
            </div>

            {/* USUARIO */}
            <div className="col text-center">
                <Link to="/login">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="currentColor"
                        class="bi bi-person"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    </svg>
                </Link>
            </div>

            {/* CARRITO */}
            <div className="col text-center">
                <Link to="/carrito">
                    <BagIcon className={styles.icono} />
                    {/* Renderiza el contador solo si es mayor que 0 */}
                    {contadorEnCarrito > 0 && (
                        <span className={styles.contadorDeCarrito}>
                        {contadorEnCarrito}
                        </span>
                    )}
                </Link>
            </div>


            {/* MODAL */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal dialog">
                        <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <h1>hola</h1>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    </section>
    );
};

export default TabNav;
