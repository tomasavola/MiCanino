import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export default function OlvidoContrasena({ onRestaurarContrasena }) {
    const [mailState, setMail] = useState('');
    const [contrasenaState, setContrasena] = useState('');
    const navigate = useNavigate();

    

    function restaurarContrasena(i) {

        i.preventDefault();

        let cuenta = {
            mail: mailState,
            contrasena: contrasenaState
        }

        onRestaurarContrasena(cuenta)

    }


    return (

        <>
        <form onSubmit={(i) => restaurarContrasena(i)}>
            { }

            <label className="letraNegra">Correo electrónico</label>
            <input type="text" name="mail" className="controls" placeholder="Correo" onChange={(i) => setMail(i.target.value)} />
            <label className="letraNegra">Ingrese una contraseña</label>
            <input type="text" name="contrasena" className="controls" placeholder="Contraseña" />
            <label className="letraNegra">Ingrese nuevamente la contraseña</label>
            <input type="text" name="contrasena" className="controls" placeholder="Contraseña" onChange={(i) => setContrasena(i.target.value)} />
            <button type="submit" className="botons" onClick={() => navigate('/')}>Confirmar</button>
        </form>
    </>

    );
};

