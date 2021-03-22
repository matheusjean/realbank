/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';

export default function app() {
    return (
        <Router>
            <Home />
        </Router>
    );
}
