import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import {
    Nav,
    Container,
    Logo,
    MobileIcon,
    Menu,
    Links,
    Item,
    Button,
    ButtonLink,
} from './styles';

// eslint-disable-next-line react/prop-types
export default function NavBar({ toogle }) {
    const [scrollNav, setScrollNav] = useState(false);

    function changeNav() {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <Container>
                        <Logo to="/">Banco Real</Logo>
                        <MobileIcon onClick={toogle}>
                            <FaBars />
                        </MobileIcon>
                        <Menu>
                            <Item>
                                <Links to="sobre">Sobre</Links>
                            </Item>
                        </Menu>
                        <Menu>
                            <Item>
                                <Links to="descobrir">Descobrir</Links>
                            </Item>
                        </Menu>
                        <Menu>
                            <Item>
                                <Links to="servicos">Serviços</Links>
                            </Item>
                        </Menu>
                        <Menu>
                            <Item>
                                <Links to="Cadastro">Cadastre-se</Links>
                            </Item>
                        </Menu>
                        <Button>
                            <ButtonLink to="/signin">Login</ButtonLink>
                        </Button>
                    </Container>
                </Nav>
            </IconContext.Provider>
        </>
    );
}
