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

export default function SideBar() {
    return (
        <Container>
            <Icon>
                <Close />
            </Icon>
            <Wrapper>
                <Menu>
                    <Link to="sobre">Sobre</Link>
                    <Link to="descubra">Descubra</Link>
                    <Link to="servicos">Serviços</Link>
                    <Link to="cadastro">Cadastro</Link>
                </Menu>
                <Button>
                    <Route to="/login">Login</Route>
                </Button>
            </Wrapper>
        </Container>
    );
}
