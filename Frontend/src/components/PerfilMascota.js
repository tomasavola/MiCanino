import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Host from './Host';
import NavBar from "./NavBar";
import Logos from "./Logos";
import FlechaVolver from './FlechaVolver';

function PerfilMascota() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const id = 3;
        setIsLoading(true);
        axios.get(`http://${Host}:5000/api/caninos/${id}`)
            .then(response => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error al obtener datos:', error);
            });
    }, []);

    return (
        <div>
            <FlechaVolver />
            <Logos />
            <NavBar />
            <h1>Perfil Mascota</h1>
            {isLoading ? (
                <p>Cargando...</p>
            ) : (
                <div>
                    <p>Raza:</p> {data.raza}<br />
                    <p>Fecha de Nacimiento:</p> {data.fecha}<br />
                    <p>Descripción:</p> {data.descripcion}<br />
                    <p>Peso:</p> {data.peso} kg
                </div>
            )}
        </div>
    );
}

export default PerfilMascota;