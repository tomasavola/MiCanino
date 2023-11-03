import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaDog, FaAngleDown } from 'react-icons/fa';
import NavBar from "./NavBar";
import Mapa from "./Mapa";
import Saludo from "./Saludo";
import Logos from "./Logos";
import Host from "./Host";

export default function Home() {
    const [userData, setUserData] = useState({ Nombre: '', Mascotas: [] });

    useEffect(() =>  {
        console.log("ESTOY EN HOME")
        const fetchData = async () => {
            const storedUserData = localStorage.getItem('userData');

            if (storedUserData) {
                const userData = JSON.parse(storedUserData);
                setUserData(userData);
            }  else {
                console.log("NO TENGO EL storedUserData")
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            {/* Encabezado con icono de mascota, nombre y flecha */}
            <div className="FotoYCambioCanino">
                <Link to="/PerfilMascota"><FaDog size={50} /></Link>
                <Link to="/Home">{userData.Nombre}</Link>
                <FaAngleDown className="FlechaInfo" size={30} />
            </div>
            <Logos />
            <Saludo />
            <Mapa />
            <NavBar />
            <div>
                <h2>Mis Mascotas:</h2>
                <ul>
                    {userData.Mascotas.map((mascota) => (
                        // Lista de mascotas
                        <li key={mascota.Id}>{mascota.Nombre}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
