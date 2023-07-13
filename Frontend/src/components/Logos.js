import { FaWrench, FaBell } from "react-icons/fa";
import { Link } from 'react-router-dom';
import React from 'react'

export default function Logos() {
    return (
        <div className="Logos">
        <Link className="LogoConfiguracion" to="/Configuracion"><FaWrench size={35} /></Link>
        <Link className="LogoNotificacion" to="/Notificaciones"><FaBell size={35} /></Link>
        </div>
    );
}
