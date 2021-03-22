/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import NavBar from '../components/NavBar';
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
        </>
    );
}
