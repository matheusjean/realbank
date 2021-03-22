/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import {
    Container,
    Background,
    VideoBg,
    Content,
    H1,
    P,
    Wrapper,
    ArrowForward,
    ArrowRight,
} from './styles';

export default function HeroSection() {
    const [hover, setHover] = useState(false);

    function onHover() {
        setHover(!hover);
    }

    return (
        <Container>
            <Background>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </Background>
            <Content>
                <H1>Banco virtual é mais fácil</H1>
                <P>
                    Cadastre-se hoje e receba R$ 0 em créditos no seu próximo
                    pagamento =D
                </P>
                <Wrapper>
                    <Button
                        to="cadastro"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                    >
                        Cadastre-se {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </Wrapper>
            </Content>
        </Container>
    );
}
