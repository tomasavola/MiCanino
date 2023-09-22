import "./dropdown.css"
import { Link } from "react-router-dom";

function Dropdown(){
    return (
      <div>
          <ul>
            <li><Link to="/MascotasPerdidas">Mascotas Perdidas</Link></li>
            <li><Link to="/CentroDeAdopcion">Centro de Adopción</Link></li>
            <li><Link to="/CursosDeAdiestramiento">Cursos de Adiestramiento</Link></li>
          </ul>
        </div>
    );
};

export default Dropdown