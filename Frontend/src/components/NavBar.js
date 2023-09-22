import React, { useState } from 'react';
import './NavBar.css';
import { FaHome, FaAmbulance, FaExclamationCircle  } from "react-icons/fa";
import {GiJumpingDog, GiDogHouse} from "react-icons/gi"
import { Link } from 'react-router-dom';

export default function NavBar() {


  return (
    <nav className="navigation">
      <div className="navigation-menu">
        <ul>
          <li>
            <Link to="/Home"><FaHome size={45} /></Link>
          </li>
          <li>
            <Link to="/Salud"><FaAmbulance size={45} /></Link>
          </li>

         
          <li><Link to="/MascotasPerdidas"><FaExclamationCircle size={45} /></Link></li>
            <li><Link to="/CentroDeAdopcion"><GiDogHouse size={45} /></Link></li>
            <li><Link to="/CursosDeAdiestramiento"><GiJumpingDog size={45} /></Link></li>

        </ul>
      </div>
    </nav>
  );
}
