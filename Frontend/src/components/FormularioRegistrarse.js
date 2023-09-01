import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormularioRegistro({ onAgregarCuenta }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [mail, setMail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [contrasena, setContrasena] = useState("");

  const navigate = useNavigate();

  async function crearCuenta(event) {
    event.preventDefault();

    

    const cuenta = {
      nombre,
      apellido,
      mail,
      telefono,
      contrasena,
    };

try {
      
      const response = await fetch("http://A-PHZ2-CIDI-005:5000/api/usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cuenta),
      });

      if (response.ok) {
        navigate("/BrindaServicio");
      } else {
        console.error("Error al registrar el usuario");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }

    onAgregarCuenta(cuenta);

    setNombre("");
    setApellido("");
    setMail("");
    setTelefono("");
    setContrasena("");

    agregarYNavegar();
  }

  function agregarYNavegar() {
    // Redirigir a la página de éxito o donde sea necesario
    navigate("/BrindaServicio");
  }

  return (
    <>
      <form onSubmit={crearCuenta}>
        <center>
          <h2 className="letraNegra">Información personal</h2>
        </center>
        <br></br>
        <label className="letraNegra">Nombre</label>
        <input
          type="text"
          name="nombre"
          className="controls"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <label className="letraNegra">Apellido</label>
        <input
          type="text"
          name="apellido"
          className="controls"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
        <label className="letraNegra">Correo electrónico</label>
        <input
          type="email"
          name="mail"
          className="controls"
          placeholder="Correo"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          required
        />
        <label className="letraNegra">Telefono</label>
        <input
          type="tel"
          name="telefono"
          className="controls"
          placeholder="Telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
        <label className="letraNegra">Contraseña</label>
        <input
          type="password"
          name="contrasena"
          className="controls"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />

        <button type="submit" className="botons">
          Crear cuenta
        </button>
      </form>
    </>
  );
}