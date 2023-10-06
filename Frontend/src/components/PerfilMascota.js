import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Host from './Host';
import NavBar from './NavBar';
import Logos from './Logos';
import FlechaVolver from './FlechaVolver';

function PerfilMascota() {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const obtenerPerfilCanino = async () => {
            try {
                const response = await axios.get(`http://${Host}:5000/api/caninos/3`); // Reemplaza "3" con el ID del canino que deseas mostrar
                setData(response.data);
                setIsLoading(false);
                console.log(response.data)
            } catch (error) {
                console.error('Error al obtener datos:', error);
                setIsLoading(false);
            }
        };

        obtenerPerfilCanino();
    }, []);

    return (
        <div>
            <FlechaVolver />
            <Logos />
            <NavBar />
            <h1>Perfil Canino</h1>
            {isLoading ? (
                <p>Cargando...</p>
            ) : (
                <div>
                    <p>Nombre: {data.nombre}</p>
                    <p>Raza: {data.raza}</p>
                    <p>Fecha de Nacimiento: {data.fechaNacimiento}</p>
                    <p>Descripción: {data.descripcion}</p>
                    <p>Peso: {data.peso} kg</p>
                    <p>Partida de Nacimiento: {data.partidaNacimiento}</p>
                    <p>Carnet de Vacunación: {data.carnetVacunacion}</p>
                    <Link to="/EditarPerfilCanino">
                        <button type="submit">Editar perfil</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default PerfilMascota;
