import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import Logos from './Logos';
import FlechaVolver from './FlechaVolver';

function Otros() {
    return (
        <div>
            <FlechaVolver />
            <Logos />
            <NavBar />
        </div>
    );
}

export default Otros;