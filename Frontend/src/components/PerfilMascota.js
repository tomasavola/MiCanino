import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Host from './Host';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Utilizamos axios para realizar la solicitud a la API
        axios.get(`http://${Host}:5000/api/caninos/`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error al obtener datos:', error);
            });
    }, []); // El array vacío asegura que useEffect se ejecute solo una vez al montar el componente

    return (
        <div>
            <h1>Perfil Mascota</h1>
            <ul>
                {data.map(canino => (
                    <li key={canino.id}>
                        <strong>Raza:</strong> {canino.raza}<br />
                        <strong>Fecha de Nacimiento:</strong> {canino.fecha}<br />
                        <strong>Descripción:</strong> {canino.descripcion}<br />
                        <strong>Peso:</strong> {canino.peso} kg
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
