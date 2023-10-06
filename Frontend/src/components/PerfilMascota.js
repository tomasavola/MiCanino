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

                const response = await axios.get(`http://A-PHZ2-CIDI-005:5000/api/caninos/1`); // Reemplaza "3" con el ID del canino que deseas mostrar
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
                    <p>Nombre: {data.Nombre}</p>
                    <p>Raza: {data.IdRaza}</p>
                    <p>Fecha de Nacimiento: {data.FechaNacimiento}</p>
                    <p>Descripción: {data.Descripcion}</p>
                    <p>Peso: {data.Peso} kg</p>
                    <p>Partida de Nacimiento: {data.PartidaNacimiento}</p>
                    <p>Carnet de Vacunación: {data.CarnetVacunacion}</p>
                    <Link to="/EditarPerfilCanino">
                        <button type="submit">Editar perfil</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default PerfilMascota;
