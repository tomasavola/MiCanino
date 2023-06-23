import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function FormularioRegistro({ onAgregarCuenta }) {

    const [idState, setId] = useState(0);
    const [nombreState, setNombre] = useState('');
    const [apellidoState, setApellido] = useState('');
    const [mailState, setMail] = useState('');
    const [telefonoState, setTelefono] = useState('');
    const [contrasenaState, setContrasena] = useState('');

    function crearCuenta(i) {

        i.preventDefault();
        setId(idState + 1)

        let cuenta = {
            id: idState,
            nombre: nombreState,
            apellido: apellidoState,
            mail: mailState,
            telefono: telefonoState,
            contrasena: contrasenaState
        }

        onAgregarCuenta(cuenta)

    }

    const navigate = useNavigate();
    return (
        <>
            <form onSubmit={(i) => crearCuenta(i)}>
                { }

                <label className="letraNegra">Nombre</label>
                <input type="text" name="nombre" className="controls" placeholder="Nombre" onChange={(i) => setNombre(i.target.value)} />
                <label className="letraNegra">Apellido</label>
                <input type="text" name="apellido" className="controls" placeholder="Apellido" onChange={(i) => setApellido(i.target.value)} />
                <label className="letraNegra">Correo electrónico</label>
                <input type="text" name="mail" className="controls" placeholder="Correo" onChange={(i) => setMail(i.target.value)} />
                <label className="letraNegra">Telefono</label>
                <textarea name="telefono" className="controls" placeholder="Telefono" onChange={(i) => setTelefono(i.target.value)}></textarea>
                <label className="letraNegra">Contraseña</label>
                <textarea name="contrasena" className="controls" placeholder="Contraseña" onChange={(i) => setContrasena(i.target.value)}></textarea>

                <button type="submit" className="botons" onClick={() => navigate('/FormularioMascota')}>Crear cuenta</button>

            </form>
        </>
    );
}
