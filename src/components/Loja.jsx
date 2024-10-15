import { Link } from "react-router-dom";

const Loja = () => {
    return ( 
        <>
            <h1>Loja do Levi</h1>

            <h1>Produtos</h1>
            <ul>
                <li><Link to={"/produto/1/casaco"}>Casaco</Link></li>
                <li><Link to={"/produto/2/camisa"}>Camisa</Link></li>
                <li><Link to={"/produto/3/calça"}>Calça</Link></li>
                <li><Link to={"/produto/4/short"}>Short</Link></li>
                <li><Link to={"/produto/5/sapato"}>Sapato</Link></li>
            </ul>
        </>
            
     );
}
 
export default Loja;