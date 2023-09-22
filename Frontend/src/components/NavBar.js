import React, { useState } from 'react';
import './NavBar.css';
import { FaHome, FaAmbulance, FaDog, FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Dropdown from './DropdownMenu';

export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
            <div className="menu-icon" onClick={toggleDropdown}>
              <FaBars color="#414040" size={50} />
            </div>
            {isDropdownOpen && (
              <div className="dropdown-container">
                <Dropdown />
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
