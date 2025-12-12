import Productos from "../components/Productos";
import Carrousel from "../components/Carrousel";

const Inicio = () => {
		
		return (
			<>
				<Carrousel/>
				<h1>Todos los Productos</h1>
				<Productos/>
			</>
		)
}

export default Inicio;