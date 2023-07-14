import { FaDog, FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import React from 'react'

export default function InfoCanino() {
    return (
        <div className="FotoYCambioCanino">
            <FaDog size={70} />
            <Link to="/Home">Bartolo</Link>
            <FaAngleDown className="FlechaInfo" size={30} />
        </div>
    );
}
