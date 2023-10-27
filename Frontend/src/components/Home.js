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
  
    
    const userId = 'usuario_autenticado';
  
    useEffect(() => {
        axios
          .get(`http://${Host}:5000/api/usuario/${userId}`)
          .then((result) => {
            const caninoIdAsociado = result.data.caninoId;
            console.log("caninoIdAsociado:", caninoIdAsociado); // Agrega esta línea para depurar
      
            axios
              .get(`http://${Host}:5000/api/caninos/${caninoIdAsociado}`)
              .then((caninoResult) => {
                setCanino(caninoResult.data);
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      }, [caninoId]);
    return (
      <div>
        <div className="FotoYCambioCanino">
          <Link to="/PerfilMascota"><FaDog size={50} /></Link>
          <Link to="/Home">{canino.nombre}</Link> {/* Accede al nombre del canino */}
          <FaAngleDown className="FlechaInfo" size={30} />
        </div>
        <Logos />
        <Saludo />
        <Mapa />
        <NavBar />
      </div>
    );
  }


