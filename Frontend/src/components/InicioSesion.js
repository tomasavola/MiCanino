import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Host from "./Host";

export default function InicioSesion() {
    const [mailState, setMail] = useState('');
    const [passwordState, setPassword] = useState('');
    const [idUsuario, setIdUsuario] = useState('');
    const navigate = useNavigate();

    async function ingresarCuenta(event) {
        event.preventDefault();

        try {
            const response = await fetch("http://A-PHZ2-CIDI-005:5000/api/login", {
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
                const userId = userData.id; 
                setIdUsuario(userId);
                navigate('/Home');
            } else {
                alert("Credenciales incorrectas");
            }
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }

        fetch('http://A-PHZ2-CIDI-005:5000/api/login')
  .then(response => {
    if (!response.ok) {
      throw new Error('La solicitud no fue exitosa');
    }
    return response.json();
  })
  .then(data => {
    
  })
  .catch(error => {
    console.error('Error al realizar la solicitud:', error);
  });
    }

    return (
        <form onSubmit={ingresarCuenta}>
            <label className="letraNegra">Correo electrónico</label>
            <input type="text" name="mail" placeholder="Correo" className="controls" onChange={(e) => setMail(e.target.value)} />
            <label className="letraNegra">Contraseña</label>
            <input type="password" name="password" placeholder="Contraseña" className="controls" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className="botons">Iniciar sesión</button>
        </form>
    );
}
