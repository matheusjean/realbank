import React from 'react';
import {
    Container,
    Icon,
    Close,
    Wrapper,
    Menu,
    Link,
    Button,
    Route,
} from './styles';

// eslint-disable-next-line react/prop-types
export default function SideBar({ isOpen, toogle }) {
    return (
        <Container isOpen={isOpen} onClick={toogle}>
            <Icon onClick={toogle}>
                <Close />
            </Icon>
            <Wrapper>
                <Menu>
                    <Link to="sobre" onClick={toogle}>
                        Sobre
                    </Link>
                    <Link to="descubra" onClick={toogle}>
                        Descubra
                    </Link>
                    <Link to="servicos" onClick={toogle}>
                        Serviços
                    </Link>
                    <Link to="cadastro" onClick={toogle}>
                        Cadastro
                    </Link>
                </Menu>
                <Button>
                    <Route to="/login">Login</Route>
                </Button>
            </Wrapper>
        </Container>
    );
}
