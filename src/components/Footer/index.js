import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa';

import {
    Container,
    Wrapper,
    LinksCtn,
    LinksWrp,
    Items,
    Title,
    FtLink,
    Media,
    MediaWrapper,
    Logo,
    Rights,
    Icons,
    IconLink,
} from './styles';

export default function Footer() {
    function toogleHome() {
        scroll.scrollToTop();
    }

    return (
        <Container>
            <Wrapper>
                <LinksCtn>
                    <LinksWrp>
                        <Items>
                            <Title>Sobre nós</Title>
                            <FtLink to="/">Como funciona</FtLink>
                            <FtLink to="/">Relatos</FtLink>
                            <FtLink to="/">Carreira</FtLink>
                            <FtLink to="/">Investidores</FtLink>
                            <FtLink to="/">Termos de serviço</FtLink>
                        </Items>

                        <Items>
                            <Title>Vídeos</Title>
                            <FtLink to="/">Veja nossos vídeos</FtLink>
                            <FtLink to="/">Embaixadores</FtLink>
                            <FtLink to="/">Agências</FtLink>
                            <FtLink to="/">Influenciadores</FtLink>
                        </Items>
                    </LinksWrp>

                    <LinksWrp>
                        <Items>
                            <Title>Contate-nos</Title>
                            <FtLink to="/">Contato</FtLink>
                            <FtLink to="/">Suporte</FtLink>
                            <FtLink to="/">Destinos</FtLink>
                            <FtLink to="/">Patrocínio</FtLink>
                        </Items>

                        <Items>
                            <Title>Redes sociais</Title>
                            <FtLink to="/">Instagram</FtLink>
                            <FtLink to="/">Facebook</FtLink>
                            <FtLink to="/">YouTube</FtLink>
                            <FtLink to="/">Twitter</FtLink>
                        </Items>
                    </LinksWrp>
                </LinksCtn>
                <Media>
                    <MediaWrapper>
                        <Logo to="/" onClick={toogleHome}>
                            Banco Real
                        </Logo>

                        <Rights>
                            Banco Real © {new Date().getFullYear()} Todos os
                            direitos reservados
                        </Rights>

                        <Icons>
                            <IconLink
                                href="//www.facebook.com/"
                                target="_blank"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </IconLink>

                            <IconLink
                                href="/"
                                target="_blank"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </IconLink>

                            <IconLink
                                href="/"
                                target="_blank"
                                aria-label="YouTube"
                            >
                                <FaYoutube />
                            </IconLink>

                            <IconLink
                                href="/"
                                target="_blank"
                                aria-label="Twitter"
                            >
                                <FaTwitter />
                            </IconLink>

                            <IconLink
                                href="/"
                                target="_blank"
                                aria-label="Linkedin"
                            >
                                <FaLinkedin />
                            </IconLink>
                        </Icons>
                    </MediaWrapper>
                </Media>
            </Wrapper>
        </Container>
    );
}
