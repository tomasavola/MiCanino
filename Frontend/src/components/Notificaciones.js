import React, { useState } from 'react';
import './Notificaciones.css';

import NavBar from './NavBar';
import Logos from './Logos';
import FlechaVolver from './FlechaVolver';

export default function Notificaciones() {
  const [notificaciones] = useState([
    '¡Hay un nuevo bar pet friendly cerca de tu zona!',
    'Todavía tienes pendiente el curso “Luigi”',
    'Se ha reportado un perro perdido cerca de tu zona',
    '!Abrió un una veterinaria en Rio de Janeiro 945!',
    '¡Bartolo fue encontrado y ya se encuentra con su dueño!',

  ]);

  const [mostrarMas, setMostrarMas] = useState(false);

  // Función para manejar el clic en "Ver más"
  const handleVerMasClick = () => {
    setMostrarMas(true);
  };

  return (
    <div className="notificaciones-container">
      <FlechaVolver />
      <Logos />
      <NavBar />
      <div className="notificaciones">
        {notificaciones.map((notificacion, index) => (
          <div key={index} className="notificacion">
            {notificacion}
            {!mostrarMas && (
              <button className="ver-mas" onClick={handleVerMasClick}>
                Ver más
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
