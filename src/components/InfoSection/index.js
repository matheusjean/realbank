/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from '../Button';
import {
    Container,
    Wrapper,
    Row,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    SubTitle,
    ButtonWpr,
    Column2,
    ImgWpr,
    Img,
} from './styles';

export default function InfoSection({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headLine,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2,
}) {
    return (
        <>
            <Container lightBg={lightBg} id={id}>
                <Wrapper>
                    <Row imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>
                                    {headLine}
                                </Heading>
                                <SubTitle darkText={darkText}>
                                    {description}
                                </SubTitle>

                                <ButtonWpr>
                                    <Button
                                        to="home"
                                        smooth
                                        duration={500}
                                        spy
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >
                                        {buttonLabel}
                                    </Button>
                                </ButtonWpr>
                            </TextWrapper>
                        </Column1>

                        <Column2>
                            <ImgWpr>
                                <Img src={img} alt={alt} />
                            </ImgWpr>
                        </Column2>
                    </Row>
                </Wrapper>
            </Container>
        </>
    );
}
