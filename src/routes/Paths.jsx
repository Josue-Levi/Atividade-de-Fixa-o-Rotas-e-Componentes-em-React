import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import PageLayout from "../Layout/PageLayout";
import Sobre from "../components/Sobre";
import Contato from "../components/Contato";
import Loja from "../components/Loja";
import Produto from "../components/Produto";


const Paths = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/sobre" element={<Sobre/>}/>
                    <Route path="/contato" element={<Contato/>}/>
                    <Route path="/loja" element={<Loja/>}/>
                    <Route path="/produto/:id/:nome" element={<Produto/>}></Route>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
     );
}
 
export default Paths;
