import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Host from "./Host";

export default function InicioSesion() {
    const [mailState, setMail] = useState('');
    const [contrasenaState, setContrasena] = useState('');
    const navigate = useNavigate();

    async function ingresarCuenta(event) {
        event.preventDefault();

        try {
            const response = await fetch("http://A-PHZ2-CIDI-053:5000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    mail: mailState,
                    contrasena: contrasenaState
                })
            });

            if (response.ok) {
                navigate('/Home');
            } else {
                alert("Credenciales incorrectas");
            }
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    }

    return (
        <form onSubmit={ingresarCuenta}>
            <label className="letraNegra">Correo electrónico</label>
            <input type="text" name="mail" placeholder="Correo" className="controls" onChange={(e) => setMail(e.target.value)} />
            <label className="letraNegra">Contraseña</label>
            <input type="password" name="contrasena" placeholder="Contraseña" className="controls" onChange={(e) => setContrasena(e.target.value)} />
            <button type="submit" className="botons">Iniciar sesión</button>
        </form>
    );
}
