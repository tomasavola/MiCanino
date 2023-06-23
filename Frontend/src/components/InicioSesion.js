import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function InicioSesion({ onIngresarCuenta }) {

    const [mailState, setMail] = useState('');
    const [contrasenaState, setContrasena] = useState('');

    function ingresarCuenta(i) {

        i.preventDefault();

        let cuenta = {
            mail: mailState,
            contrasena: contrasenaState
        }

        onIngresarCuenta(cuenta)

    }

    const navigate = useNavigate();
    return (
        <>
            <form onSubmit={(i) => ingresarCuenta(i)}>
                { }

                <label className="letraNegra">Correo electrónico</label>
                <input type="text" name="mail" className="controls" placeholder="Correo" onChange={(i) => setMail(i.target.value)} />
                <label className="letraNegra">Contraseña</label>
                <input type="text" name="contrasena" className="controls" placeholder="Contraseña" onChange={(i) => setContrasena(i.target.value)} />

                <button type="submit" className="botons" onClick={() => navigate('/Home')}>Iniciar sesión</button>
            </form>
        </>
    );
}
