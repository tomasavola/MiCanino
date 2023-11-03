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
    const [userData, setUserData] = useState({ nombre: '', mascotas: [] });
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setUserId(storedUserId);

            axios

                /*.get(`http://${Host}:5000/api/userData/${userId}`)*/
                .get(`http://${Host}:5000/api/login`)
                .then((result) => {
                    const userData = result.data;
                    setUserData(userData);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [caninoId, userId]);

    return (
        <div>
            <div className="FotoYCambioCanino">
                <Link to="/PerfilMascota"><FaDog size={50} /></Link>
                <Link to="/Home">{userData.nombre}</Link>
                <FaAngleDown className="FlechaInfo" size={30} />
            </div>
            <Logos />
            <Saludo />
            <Mapa />
            <NavBar />
            <div>
                <h2>Mis Mascotas:</h2>
                <ul>
                    {userData.mascotas.map((mascota) => (
                        console.log("VIENDO LO DEL NOMBRE " + mascota.id),
                        <li key={mascota.Id}>{mascota.Nombre}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
