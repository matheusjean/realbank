/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar/index';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    function toogle() {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <SideBar isOpen={isOpen} toogle={toogle} />
            <NavBar toogle={toogle} />
        </>
    );
}
