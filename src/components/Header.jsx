import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: green;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    padding: 0 60px;
    & h1{
        color: white;
    }
    & nav ul{
        display: flex;
        gap: 36px;
        list-style: none;

        & li a{
            color:#ffffff80;
            text-decoration: none;
            font-size: 18px;

            &:hover, &.active{
                color: white;
            } 
        }

    }

`

const Header = () => {
    return ( 
        <HeaderContainer>
            <h1>Loja do Levi</h1>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/loja"}>Loja</NavLink></li>
                    <li><NavLink to={"/contato"}>Contato</NavLink></li>
                    <li><NavLink to={"/sobre"}>Sobre</NavLink></li>
                </ul>
            </nav>
        </HeaderContainer>
       
     );
}
 
export default Header;
