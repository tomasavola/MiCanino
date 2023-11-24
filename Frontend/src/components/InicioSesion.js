import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Host from "./Host";

export default function InicioSesion() {
    const [mailState, setMail] = useState('');
    const [passwordState, setPassword] = useState('');
    const [sessionUsuario, setSessionUsuario] = useState(null);
    const navigate = useNavigate();

    async function ingresarCuenta(event) {
        event.preventDefault();

        try {
            const response = await fetch("http://A-PHZ2-CIDI-006:5000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    mail: mailState,
                    password: passwordState
                })
            });

            if (response.ok) {
                const userData = await response.json();

                // Guardar el objeto JSON en el LocalStorage
                localStorage.setItem('userData', JSON.stringify(userData));

                console.log('Guardando en el LocalStorage');
                console.log(userData);
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
            {/* Campos de entrada para correo electrónico y contraseña */}
            <label className="letraNegra">Correo electrónico</label>
            <input type="text" name="mail" placeholder="Correo" className="controls" onChange={(e) => setMail(e.target.value)} />
            <label className="letraNegra">Contraseña</label>
            <input type="password" name="password" placeholder="Contraseña" className="controls" onChange={(e) => setPassword(e.target.value)} />
            {/* Botón para iniciar sesión */}
            <button type="submit" className="botons">Iniciar sesión</button>
        </form>
    );
}
