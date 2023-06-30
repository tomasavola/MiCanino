import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function BrindaSerivcio({ }) {
    const navigate = useNavigate();
    return (
        <>
            <center><h2 className="letraNegra">¿Brindas algún servicio?</h2></center>
            <button type="submit" className="botons" onClick={() => navigate('/FormularioServicio1')}>Si</button>
            <button type="submit" className="botons" onClick={() => navigate('/FormularioMascota')}>No</button>

        </>
    );
}
