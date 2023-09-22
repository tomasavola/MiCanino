import React from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function FlechaVolver() {

    const navigate = useNavigate();
    return (
        <div>
            <FaAngleLeft onClick={() => navigate(-1)} className="FlechaVolver" size={40} />
        </div>
    )
}