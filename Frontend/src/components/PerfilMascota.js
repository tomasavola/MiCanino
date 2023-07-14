import NavBar from "./NavBar";
import Logos from "./Logos";
import FlechaVolver from './FlechaVolver';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Host from "./Host";

function CargarCaninos() {
    axios

        .get('http://' + Host + ':5000/api/caninos')
        .then((result) => {
            const caninos = result.data.results;

            caninos.map((canino, index) => {
                const { nombre, url } = canino;
                document.querySelector("#listado").innerHTML += `

    <div class="col-3 pt-4; col">
    <div class="services">
    <div class="card graphic-design">
      <div class="service-bg">
      <br> <br>
        <h5>${canino.nombre}</h5>
        <br> 
      </div>
    </div>
    </div>
          `

            });
        })
        .catch((error) => {
            console.log(error);
        });
}

export default function PerfilMascota() {
    const [canino, setCanino] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        obtenerInformacionCaninos();
    }, []);

    const obtenerInformacionCaninos = async (id) => {
        try {
            const response = await axios.get(`http://A-PHZ2-CIDI-005:5000/api/caninos/${id}`);
            setCanino(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <FlechaVolver />
            <Logos />
            <NavBar />

            {canino ? (
                <div>
                    <h1 className="letraNegra">Información del Canino</h1>
                    <p className="letraNegra">Nombre: {canino.nombre}</p>
                    <p className="letraNegra">Fecha de Nacimiento: {canino.FechaNacimiento}</p>
                    <p className="letraNegra">ID de Raza: {canino.idRaza}</p>
                    <p className="letraNegra">Descripción: {canino.descripcion}</p>
                    <p className="letraNegra">Peso: {canino.peso}</p>
                </div>
            ) : (
                <p>Cargando información del canino...</p>
            )}
        </div>

    );
}

