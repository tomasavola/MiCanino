import React from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function FlechaVolver() {

    const navigate = useNavigate();
    function agregarYNavegar() {
        navigate(-1);
    }
    return (
        <div>
            <FaAngleLeft onClick={() => navigate(-1)} className="FlechaVolver" size={40} />
        </div>
    )
}