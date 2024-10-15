import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: green;
    padding: 5px;
    margin: 0px;
    display: flex;
    justify-content: center;

    p{
        color: white;
    }

`

const Footer = () => {
    return ( 
        <FooterContainer>
            <section>
                <p>Todos os direitos reservados 2024</p>
            </section>
        </FooterContainer>
     );
}
 
export default Footer;
