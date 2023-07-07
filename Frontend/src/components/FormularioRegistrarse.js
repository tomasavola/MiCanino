import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormularioRegistro({ onAgregarCuenta }) {
    const [idState, setId] = useState(0);
    const [nombreState, setNombre] = useState('');
    const [apellidoState, setApellido] = useState('');
    const [mailState, setMail] = useState('');
    const [telefonoState, setTelefono] = useState('');
    const [contrasenaState, setContrasena] = useState('');

    const navigate = useNavigate();

    function crearCuenta(event) {
        event.preventDefault();
        setId(idState + 1);

        let cuenta = {
            id: idState,
            nombre: nombreState,
            apellido: apellidoState,
            mail: mailState,
            telefono: telefonoState,
            contrasena: contrasenaState
        };

        onAgregarCuenta(cuenta);
        agregarYNavegar();
    }

    function agregarYNavegar() {
        navigate('/BrindaServicio');
    }

    return (
        <>
            <form onSubmit={crearCuenta}>
                <center><h2 className="letraNegra">Información personal</h2></center>
                <br></br>
                <label className="letraNegra">Nombre</label>
                <input type="text" name="nombre" className="controls" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
                <label className="letraNegra">Apellido</label>
                <input type="text" name="apellido" className="controls" placeholder="Apellido" onChange={(e) => setApellido(e.target.value)} />
                <label className="letraNegra">Correo electrónico</label>
                <input type="text" name="mail" className="controls" placeholder="Correo" onChange={(e) => setMail(e.target.value)} />
                <label className="letraNegra">Telefono</label>
                <input type="text" name="telefono" className="controls" placeholder="Telefono" onChange={(e) => setTelefono(e.target.value)} />
                <label className="letraNegra">Contraseña</label>
                <input type="text" name="Contrasena" className="controls" placeholder="Contraseña" onChange={(e) => setContrasena(e.target.value)} />

                <button type="submit" className="botons">Crear cuenta</button>
            </form>
        </>
    );
}