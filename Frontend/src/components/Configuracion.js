import NavBar from "./NavBar";
import Logos from "./Logos";
import FlechaVolver from './FlechaVolver';
import React from 'react';
import './Configuracion.css';

import { Link } from 'react-router-dom'; // Asumiendo que estás usando react-router-dom para la navegación

export default function Configuracion() {
    return (
        <div className="config-container">

            <FlechaVolver />
            <Logos />
            <NavBar />

            <h1>Configuración</h1>
            <div className="config-item">
                <p>Nombre del usuario: Usuario Ejemplo</p>
            </div>
            <div className="config-item">
                <p>Configurar perfil</p>
            </div>
            <div className="config-item">
                <p>Tipo de cuenta: Cuenta Ejemplo</p>
            </div>
            <div className="config-item">
                <p>Idioma</p>
            </div>
            <div className="config-item">
                <center><Link to="/Notificaciones">Notificaciones</Link> </center>
            </div>
            <div className="config-item">
                <button>Cerrar sesión</button>
            </div>
            <div className="Eliminar">
                <center><Link to="/EliminarCuenta">Eliminar cuenta</Link> </center>
            </div>
        </div>
    );
}
