import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MascotasPerdidas from './MascotasPerdidas';
import CentroAdopcion from './CentroAdopcion';
import CursosAdiestramiento from './CursosAdiestramiento';
import NavBar from './NavBar';
import Logos from './Logos';
import FlechaVolver from './FlechaVolver';
import './Otros.css';

function Otros() {
    return (
        <Router>
            <div>
                <FlechaVolver />
                <Logos />
                <NavBar />
                <nav>
                    <ul>
                        <li>
                            <Link to="/mascotas-perdidas">Mascotas perdidas</Link>
                        </li>
                        <li>
                            <Link to="/centro-adopcion">Centro de adopcion</Link>
                        </li>
                        <li>
                            <Link to="/cursos-adiestramiento">Cursos de adiestramiento</Link>
                        </li>
                    </ul>
                </nav>

                {/* Aquí se renderizan los componentes de ruta */}
                <Route path="/mascotas-perdidas" component={MascotasPerdidas} />
                <Route path="/centro-adopcion" component={CentroAdopcion} />
                <Route path="/cursos-adiestramiento" component={CursosAdiestramiento} />
            </div>
        </Router>
    );
}

export default Otros;