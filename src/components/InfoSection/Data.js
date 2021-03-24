/* eslint-disable no-unused-vars */
import Svg5 from '../../images/svg-5.svg';
import Svg1 from '../../images/svg-2.svg';
import Svg3 from '../../images/svg-3.svg';

export const homeObj1 = {
    id: 'sobre',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Banco Premium',
    headLine: 'Transações ilimitadas com taxa ZERO',
    description:
        'Tenha acesso ao nosso app exclusivo para enviar transaçẽos ilimitadas sem ser cobrado.',
    buttonLabel: 'Comece',
    imgStart: false,
    img: Svg1,
    alt: 'Carro',
    dark: true,
    primary: true,
    darkText: false,
};

export const homeObj2 = {
    id: 'descubra',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Acesso ilimitado',
    headLine: 'Conecte-se a sua conta a qualquer momento',
    description:
        'Cobrimos você onde quer que esteja. Você só precisa de acesso a internet com celular ou computador.',
    buttonLabel: 'Saiba mais',
    imgStart: true,
    img: Svg5,
    alt: 'Piggybank',
    dark: false,
    primary: false,
    darkText: true,
};

export const homeObj3 = {
    id: 'cadastro',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Junte-se a nós!',
    headLine: 'Criar conta é extremamente fácil',
    description:
        'Tenha tudo pronto em menos de 10 minutos. Você só precisa cadastrar suas informações.',
    buttonLabel: 'Comece agora',
    imgStart: false,
    img: Svg3,
    alt: 'paper',
    dark: false,
    primary: false,
    darkText: true,
};
