import React from 'react';

import {
    Container,
    Content,
    Form,
    Button,
    H1,
    Icon,
    Input,
    Label,
    Text,
    Wrapper,
} from './styles';

export default function Signin() {
    return (
        <Container>
            <Wrapper>
                <Icon to="/">Banco Real</Icon>
                <Content>
                    <Form action="#">
                        <H1>Logue com sua conta</H1>
                        <Label htmlFor="for">E-mail</Label>
                        <Input type="email" required />
                        <Label htmlFor="for">Senha</Label>
                        <Input type="password" required />
                        <Button type="submit">Continue</Button>
                        <Text>Esqueci a senha</Text>
                    </Form>
                </Content>
            </Wrapper>
        </Container>
    );
}
