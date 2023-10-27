import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaDog, FaAngleDown } from 'react-icons/fa';
import NavBar from "./NavBar";
import Mapa from "./Mapa";
import Saludo from "./Saludo";
import Logos from "./Logos";
import Host from "./Host";

export default function Home() {
    const { caninoId } = useParams();
    const [canino, setCanino] = useState({ nombre: '' });
    const [mascotas, setMascotas] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        // Obtén el ID del usuario desde el almacenamiento local (localStorage)
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setUserId(storedUserId);
        }

        axios
            .get(`http://${Host}:5000/api/usuario/${userId}`)
            .then((result) => {
                const caninoIdAsociado = result.data.caninoId;
                console.log("caninoIdAsociado:", caninoIdAsociado);

                axios
                    .get(`http://${Host}:5000/api/caninos/${caninoIdAsociado}`)
                    .then((caninoResult) => {
                        setCanino(caninoResult.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });

                axios
                    .get(`http://${Host}:5000/api/mascotas/${userId}`)
                    .then((mascotasResult) => {
                        setMascotas(mascotasResult.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    }, [caninoId, userId]);

    return (
        <div>
            <div className="FotoYCambioCanino">
                <Link to="/PerfilMascota"><FaDog size={50} /></Link>
                <Link to="/Home">{canino.nombre}</Link>
                <FaAngleDown className="FlechaInfo" size={30} />
            </div>
            <Logos />
            <Saludo />
            <Mapa />
            <NavBar />
            <div>
                <h2>Mis Mascotas:</h2>
                <ul>
                    {mascotas.map((mascota) => (
                        <li key={mascota.Id}>{mascota.Nombre}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
