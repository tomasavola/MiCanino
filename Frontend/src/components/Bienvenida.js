import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Bienvenida({ }) {
    const navigate = useNavigate();
    return (
        <>
            <br></br>
            <center><h2 className="letraNegra">¡Bienvenido a MiCanino! A continuación, podrás ingresar la información basica de tu mascota</h2></center>
            <br></br><br></br>
            <button type="submit" className="botons" onClick={() => navigate('/FormularioMascota')}>Continuar</button>

        </>
    );
}
