import { useState } from "react";

export default function Formulario({onAgregarCuenta}) {

    const [idState, setId] = useState(0);
    const [nombreState, setNombre] = useState('');
    const [apellidoState, setApellido] = useState('');
    const [mailState, setMail] = useState('');
    const [telefonoState, setTelefono] = useState('');
    const [contrasenaState, setContrasena] = useState('');   

    function crearCuenta(i){

        i.preventDefault();
        setId(idState + 1)

        let cuenta = {
            id: idState,
            nombre: nombreState,
            apellido: apellidoState,
            mail: mailState,
            telefono:telefonoState,
            contrasena:contrasenaState
        } 

        onAgregarCuenta(cuenta)

    }

    return (
    <>
        <form onSubmit={(i) => crearCuenta(i)}>
            {}

            <label>Nombre</label>
            <input type="text" name="nombre" className="u-full-width" placeholder="Nombre" onChange={(i) => setNombre(i.target.value)}/>
            <label>Apellido</label>
            <input type="text" name="apellido" className="u-full-width" placeholder="Apellido" onChange={(i) => setApellido(i.target.value)}/>
            <label>Correo electrónico</label>
            <input type="time" name="mail" className="u-full-width" placeholder="Correo" onChange={(i) => setMail(i.target.value)}/>
            <label>Telefono</label>  
            <textarea name="telefono" className="u-full-width" placeholder="Telefono" onChange={(i) => setTelefono(i.target.value)}></textarea>
            <label>Contraseña</label>  
            <textarea name="sintomas" className="u-full-width" placeholder="Contraseña" onChange={(i) => setContrasena(i.target.value)}></textarea>         

            <button type="submit" className="u-full-width button-primary">Crear cuenta</button>

        </form>
    </>
    );
}
  