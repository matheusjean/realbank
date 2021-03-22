/* eslint-disable react/jsx-no-undef */
import React from 'react';

import { Nav, Container, Logo } from './styles';

export default function NavBar() {
    return (
        <>
            <Nav>
                <Container>
                    <Logo to="/">dollar</Logo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <Menu>
                        <Item>
                            <Links to="sobre">Sobre</Links>
                        </Item>
                    </Menu>
                </Container>
            </Nav>
        </>
    );
}
