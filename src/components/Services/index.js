/* eslint-disable no-undef */
import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';

import { Container, H1, Icon, Wrapper, Card, H2, P } from './styles';

export default function Services() {
    return (
        <Container>
            <H1>Nossos serviços</H1>
            <Wrapper>
                <Card>
                    <Icon src={Icon1} />
                    <H2>Reduza custos</H2>
                    <P>
                        Ajudamos você a reduzir taxas, melhorar seu nome, a sua
                        vida e de sua família
                    </P>
                </Card>

                <Card>
                    <Icon src={Icon2} />
                    <H2>Escritório vitual</H2>
                    <P>
                        Você pode acessar nossa plataforma online de qualquer
                        lugar do mundo
                    </P>
                </Card>

                <Card>
                    <Icon src={Icon3} />
                    <H2>Beneficios premium</H2>
                    <P>
                        Desbloqueie nosso cartão de membro especial e ganhe 5%
                        de cashback
                    </P>
                </Card>
            </Wrapper>
        </Container>
    );
}
