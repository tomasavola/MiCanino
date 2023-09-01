import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Host from './Host';
import NavBar from "./NavBar";
import Logos from "./Logos";
import FlechaVolver from './FlechaVolver';

function MascotasPerdidas() {
    return (
        <div>
            <FlechaVolver />
            <Logos />
            <NavBar />

        </div>
    );
}

export default MascotasPerdidas;