import React from 'react'
import { FaHome, FaAmbulance, FaDog, FaGripLines } from "react-icons/fa";


export default function Navbar() {
    return (
      <nav className="navigation">
        <div className="navigation-menu">
          <ul>
            <li>
              <a href="/Home"><FaHome/></a>
            </li>
            <li>
              <a href="/Salud"><FaAmbulance/></a>
            </li>
            <li>
              <a href="/PerfilMascota"><FaDog/></a>
            </li>
            <li>
              <a href="/Otros"><FaGripLines/></a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }