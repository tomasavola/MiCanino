import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaDog, FaAngleDown } from 'react-icons/fa';
import NavBar from "./NavBar";
import Mapa from "./Mapa";
import Logos from "./Logos";
import Host from "./Host";
import './Home.css'; // Importa tu archivo CSS

export default function Home() {
  const [userData, setUserData] = useState({ Nombre: '', Apellido:'', Mascotas: [] });
  const [showMascotasDropdown, setShowMascotasDropdown] = useState(false);

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

  const toggleMascotasDropdown = () => {
    setShowMascotasDropdown(!showMascotasDropdown);
  }
console.log("USUARIO" + userData.Nombre)
  return (
    <div>
      {/* Encabezado con icono de mascota y nombre */}
      <div className="FotoYCambioCanino">
        {userData.Mascotas && userData.Mascotas.length > 0 ? (
          <Link to={`/PerfilMascota/${userData.Mascotas[0].Id}`}>
            <FaDog size={50} />
          </Link>
        ) : (
          <span>No hay mascotas</span>
        )}
        <div className="NombreYFlecha" onClick={toggleMascotasDropdown}>
          <span className="NombreMascota">
            {userData.Mascotas && userData.Mascotas.length > 0 ? userData.Mascotas[0].Nombre : 'Sin mascotas'}
          </span>
        </div>
        <FaAngleDown className="FlechaInfo" size={30} />
      </div>
      {showMascotasDropdown && (
        <div className="DropdownMascotas">
          <ul>
            {userData.Mascotas.map((mascota) => (
              <li key={mascota.Id}>
                <Link to={`/PerfilMascota/${mascota.Id}`}>
                  {mascota.Nombre}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Logos />
      <div className="Saludo">
        ¡Buenos días, {userData.Nombre} {userData.Apellido}!
      </div>
      <Mapa />
      <NavBar />
    </div>
  );
}
