import { useState, useEffect, useContext, createContext } from "react";

export const ProductosContext = createContext()

export const ProductosProvider = ({children}) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const API = "https://690d56a0a6d92d83e8512618.mockapi.io/Productos";

  //Cargar productos al montaqr el componente
  useEffect(() => {
    cargarProductos()
  }, []);

  const cargarProductos = async () => {
    try{
      setCargando(true);
      setError(null);

      const r = await fetch(API);

      if (!r.ok)
        throw new Error(`Error: ${r.status}`)
      
      const datos = await r.json();
      setProductos(datos);
      
    } catch(error){
      console.error("No pudimos cargar los productos", error)
      setError(error.message || "No pudismos cargar los productos");
    } finally {
      setCargando(false);
    }
  };

// Agregar producto en API
  const agregarProducto = async (producto) =>{
    try{
      setError(null)

      const r = await fetch(API, {
        method: "POST",
        headers: {"Content-Type" : "applicacion/json"},
        body: JSON.stringify(producto),
      })
      const nuevoProducto = await r.json();
      console.log("Producto agregado: ", nuevoProducto);
    
      if (!r.ok) {
        throw new Error( `Error HTTP: ${r.status}` )    
      }
        setProductos([... productos, nuevoProducto]);
    } catch{
      console.error("Error al agregar el producto", error)
      setError(error.message || "Algo falló y no pudimos agregar el producto");
    }
  }

  // Editar un Producto ssegun ID
  const editarProducto = async (producto) =>{
    try{
      setError(null)

      const r = await fetch(`${API}/${producto.id}`, {
        method: "PUT",
        headers: {"Content-Type" : "applicacion/json"},
        body: JSON.stringify(producto),
      })

      if (!r.ok) {
        throw new Error( `Error HTTP: ${r.status}` )
      }

      const productoActualizado = await r.json();
      setProductos( productos.map( p =>
        p.id === productoActualizado.id ? productoActualizado : p
      ));

    } catch {
      console.error("Error al editar el producto", error)
      setError(error.message || "No pudimos editar el producto");
    }
  }

  // ELIMINAR el producto segun ID

    const eliminarProducto = async (producto) => {
      const confirmar = windows.confirm("¿Estas seguro de eliminar el producto?")
      
      if (confirmar) {
        try {
          setError(null);

          const r = await fetch(`${API}/${id}`, {
            method: "DELETE"
          });

          if (!r.ok) {
            throw new Error("Error al eliminar el producto")
            setProductos(productos.filter(p => p.id !== id))
          }
        } catch (error) {
          console.error("Error al eliminar el producto", error)
          setError(error.message || "No pudimos eliminar el producto");
        }
      }
    }
  return (
    <ProductosContext.Provider
      value={{
        productos,
        cargando,
        error,
        cargarProductos,
        agregarProducto,
        editarProducto,
        eliminarProducto
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};

export const useProductosContext = () => useContext(ProductosContext);