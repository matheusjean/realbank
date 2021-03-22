/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { FaBars } from 'react-icons/fa';

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

export default function NavBar() {
    return (
        <>
            <Nav>
                <Container>
                    <Logo to="/">Banco Real</Logo>
                    <MobileIcon>
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
                        <ButtonLink to="/signin">Sign In</ButtonLink>
                    </Button>
                </Container>
            </Nav>
        </>
    );
}
