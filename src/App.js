/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';

export default function app() {
    return (
        <Router>
            <NavBar />
        </Router>
    );
}
