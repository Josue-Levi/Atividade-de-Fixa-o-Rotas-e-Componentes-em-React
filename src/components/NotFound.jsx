import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <h1>Não possui conteudo nesta pagina...</h1>
    
            <h2>Redirecione para a pagina inicial: <Link to={"/"}>Home</Link></h2>
        </div>
            
     );
}
 
export default NotFound;