import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Logos from './Logos';
import FlechaVolver from './FlechaVolver';
import './Configuracion.css';

export default function Configuracion() {
  return (
    <div>
      <FlechaVolver />
      <Logos />
      <NavBar />
      <div className="config-container">
      <h1>Configuración</h1>
      <div className="config-item">
        <p>Nombre del usuario: Usuario Ejemplo</p>
      </div>
      <div className="config-item">
        <Link to="/EditarPerfilUsuario">Configurar perfil</Link>
      </div>
      <div className="config-item">
        <p>Tipo de cuenta: Cuenta Ejemplo</p>
      </div>
      <div className="config-item">
        <p>Idioma</p>
      </div>
      <div className="config-item">
        <Link to="/Notificaciones">Notificaciones</Link>
      </div>
      <div className="config-item">
        <Link to= "/"><button>Cerrar sesión</button></Link>
      </div>
      <div className="config-item Eliminar">
        <Link to="/EliminarCuenta">Eliminar cuenta</Link>
      </div>
      </div>
    </div>
  );
}
