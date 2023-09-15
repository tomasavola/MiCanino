import React, { useState } from 'react';
import './NavBar.css';
import { FaHome, FaAmbulance, FaDog, FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Dropdown from './DropdownMenu';

export default function NavBar() {
  
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    // do something
    setOpen(false);
  };

  const handleMenuTwo = () => {
    // do something
    setOpen(false);
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
            <div onClick={open}>
              <FaBars size={50} />
            </div>
          </li>
        </ul>
      </div>
      {open && (
        <Dropdown
        open={open}
        trigger={<button onClick={handleOpen}>Dropdown</button>}
        menu={[
          <button onClick={handleMenuOne}>Menu 1</button>,
          <button onClick={handleMenuTwo}>Menu 2</button>,
        ]}
      />
      )}
    </nav>
  );
}
/*        <div className="otros-menu">
          <ul>
            <li><Link to="/MascotasPerdidas">Mascotas Perdidas</Link></li>
            <li><Link to="/CentroDeAdopcion">Centro de Adopción</Link></li>
            <li><Link to="/CursosDeAdiestramiento">Cursos de Adiestramiento</Link></li>
          </ul>
        </div>*/
