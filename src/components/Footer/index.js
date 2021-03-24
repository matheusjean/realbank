import React from 'react';
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
    return (
        <Container>
            <Wrapper>
                <LinksCtn>
                    <LinksWrp>
                        <Items>
                            <Title>Sobre nós</Title>
                            <FtLink to="/signin">Como funciona</FtLink>
                            <FtLink to="/signin">Relatos</FtLink>
                            <FtLink to="/signin">Carreira</FtLink>
                            <FtLink to="/signin">Investidores</FtLink>
                            <FtLink to="/signin">Termos de serviço</FtLink>
                        </Items>

                        <Items>
                            <Title>Vídeos</Title>
                            <FtLink to="/signin">Veja nossos vídeos</FtLink>
                            <FtLink to="/signin">Embaixadores</FtLink>
                            <FtLink to="/signin">Agências</FtLink>
                            <FtLink to="/signin">Influenciadores</FtLink>
                        </Items>
                    </LinksWrp>

                    <LinksWrp>
                        <Items>
                            <Title>Contate-nos</Title>
                            <FtLink to="/signin">Contato</FtLink>
                            <FtLink to="/signin">Suporte</FtLink>
                            <FtLink to="/signin">Destinos</FtLink>
                            <FtLink to="/signin">Patrocínio</FtLink>
                        </Items>

                        <Items>
                            <Title>Redes sociais</Title>
                            <FtLink to="/signin">Instagram</FtLink>
                            <FtLink to="/signin">Facebook</FtLink>
                            <FtLink to="/signin">YouTube</FtLink>
                            <FtLink to="/signin">Twitter</FtLink>
                        </Items>
                    </LinksWrp>
                </LinksCtn>
                <Media>
                    <MediaWrapper>
                        <Logo to="/"> Banco Real</Logo>

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
