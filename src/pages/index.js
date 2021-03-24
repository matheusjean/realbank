/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObj1, homeObj2, homeObj3 } from '../components/InfoSection/Data';
import NavBar from '../components/NavBar';
import Services from '../components/Services';
import SideBar from '../components/SideBar/index';
import GlobalStyles from '../styles/GlobalStyles';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    function toogle() {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <GlobalStyles />
            <SideBar isOpen={isOpen} toogle={toogle} />
            <NavBar toogle={toogle} />
            <HeroSection />
            <InfoSection {...homeObj1} />
            <InfoSection {...homeObj2} />
            <Services />
            <InfoSection {...homeObj3} />
        </>
    );
}
