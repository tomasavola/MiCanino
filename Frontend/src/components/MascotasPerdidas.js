import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Host from './Host';
import NavBar from './NavBar';
import Logos from './Logos';
import FlechaVolver from './FlechaVolver';

function MascotasPerdidas() {
  const [mascotasPerdidas, setMascotasPerdidas] = useState([]);

  useEffect(() => {
    // Realizar la llamada a la API para obtener las mascotas perdidas
    axios.get(`http://${Host}:5000/api/caninosPerdidos`)
      .then(response => {
        setMascotasPerdidas(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []); // El segundo argumento vacío indica que este efecto se ejecuta solo una vez al montar el componente

  return (
    <div>
      <FlechaVolver />
      <Logos />

      {/* Mostrar las mascotas perdidas */}
      <h1>Mascotas Perdidas</h1>
      <ul>
        {mascotasPerdidas.map(mascota => (
          <li key={mascota.id}>
            Nombre: {mascota.nombre}, Raza: {mascota.raza}, Edad: {mascota.edad}
            {/* Agrega más campos según la estructura de tus datos */}
          </li>
        ))}
      </ul>
      <NavBar />

    </div>
  );
}

export default MascotasPerdidas;
