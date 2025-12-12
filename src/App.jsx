import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import TabNav from "./components/TabNav.jsx"

import Inicio from "./routes/Inicio.jsx";
import Contacto from "./routes/Contacto.jsx";
import Sale from "./routes/Sale.jsx";
import Login from "./routes/Login";
import Carrito from "./components/Carrito";
import Admin from "./routes/Admin";

import DetalleProducto from "./routes/DetalleProducto.jsx";
import RutaProtegida from "./components/RutaProtegida";
import Privacity from "./components/Politicies.jsx";
import ResultadosBusqueda from "./components/ResultadosBusqueda";


function App() {
  return (
    <div  className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Header />
      <Routes>
        <Route path={"/"} element={<Inicio />} />
        <Route path={"/contacto"} element={<Contacto />} />
        <Route path={"/sale"} element={<Sale />} />
        <Route path="/login" element={<Login />} />
        <Route path="/busqueda" element={<ResultadosBusqueda />} />
        <Route path={"/privacity"} element={<Privacity />} />
        <Route path={"/productos/:id"} element={<DetalleProducto />} />
          <Route
            path="/carrito"
            element={
              <RutaProtegida >
                <Carrito />
              </RutaProtegida>
            }
          />
          <Route
            path="/admin"
            element={
              <RutaProtegida >
                <Admin />
              </RutaProtegida>
            }
          />
      </Routes>
      <Footer />
      <TabNav/>
    </div>
  );
}

export default App;
