import React from 'react'
import './NavBar.css';
import { FaHome, FaAmbulance, FaDog, FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navigation">
      <div className="navigation-menu">
        <ul>
          <li>
            <Link to="/Home"><FaHome size={50} /></Link>
          </li>
          <li>
            <Link to="/Salud"><FaAmbulance size={50} /></Link>
          </li>
          <li>
            <Link to="/PerfilMascota"><FaDog size={50} /></Link>
          </li>
          <li>
            <Link to="/Otros"><FaBars size={50} /></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
