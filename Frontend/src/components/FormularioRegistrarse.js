import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormularioRegistro({ onAgregarCuenta }) {
  const [Nombre, setNombre] = useState("");
  const [Apellido, setApellido] = useState("");
  const [Mail, setMail] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

  async function crearCuenta(event) {
    event.preventDefault();

    const cuenta = {
      nombre    : Nombre,
      apellido  : Apellido,
      mail      : Mail,
      telefono  : Telefono,
      password  : Password
    };
    console.log("Cuenta:", JSON.stringify(cuenta));
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

    // Restablecer estados locales
    setNombre("");
    setApellido("");
    setMail("");
    setTelefono("");
    setPassword("");

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
          name="Nombre"
          className="controls"
          placeholder="Nombre"
          value={Nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <label className="letraNegra">Apellido</label>
        <input
          type="text"
          name="Apellido"
          className="controls"
          placeholder="Apellido"
          value={Apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
        <label className="letraNegra">Correo electrónico</label>
        <input
          type="email"
          name="Mail"
          className="controls"
          placeholder="Correo"
          value={Mail}
          onChange={(e) => setMail(e.target.value)}
          required
        />
        <label className="letraNegra">Telefono</label>
        <input
          type="tel"
          name="Telefono"
          className="controls"
          placeholder="Telefono"
          value={Telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
        <label className="letraNegra">Contraseña</label>
        <input
          type="password"
          name="Password"
          className="controls"
          placeholder="Contraseña"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="botons">
          Crear cuenta
        </button>
      </form>
    </>
  );
}
