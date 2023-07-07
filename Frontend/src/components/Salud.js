import React from 'react'
import NavBar from "./NavBar";
import Logos from "./Logos";
import FlechaVolver from './FlechaVolver';
import FotoCalendario from './FotoCalendario';
import { useNavigate } from "react-router-dom";

export default function Salud() {
    const navigate = useNavigate();
    return (
        <div>
            <FlechaVolver />
            <Logos />
            <FotoCalendario />
            <button type="submit" className="botons" onClick={() => navigate('/FormularioEvento')}>Agregar evento +</button>
            <NavBar />
        </div>
    )
}