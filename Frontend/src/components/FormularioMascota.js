import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FormularioMascota = () => {
  const [Nombre, setNombre] = useState("Alejandro");
  const [FechaNacimiento, setFechaNacimiento] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [Peso, setPeso] = useState("");
  const [Foto, setFoto] = useState("");
  const [PartidaNacimiento, setPartidaNacimiento] = useState("");
  const [CarnetVacunacion, setCarnetVacunacion] = useState("");
  const [mascotas, setMascotas] = useState([]);
  const navigate = useNavigate();

  const crearMascota = async (event) => {
    event.preventDefault();

    const mascota = {
      nombre: Nombre,
      fecha: FechaNacimiento,
      descripcion: Descripcion,
      peso: Peso,
      foto: Foto,
      partidaNacimiento: PartidaNacimiento,
      carnetVacunacion: CarnetVacunacion,
    };
    console.log('mascota');
    console.log(mascota);

    try {
      const response = await fetch("http://A-PHZ2-CIDI-005:5000/api/caninos/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mascota),
      });
      const data = await response.json();
      console.log("Respuesta del servidor:", data);
      if (response.ok) {
        console.log("Mascota registrada con éxito");
        console.log("Se registró " + JSON.stringify(mascota));
        setNombre("");
        setFechaNacimiento("");
        setDescripcion("");
        setPeso("");
        setFoto("");
        setPartidaNacimiento("");
        setCarnetVacunacion("");
        // Redirigir a la página deseada
        navigate("/Home");
      } else {
        console.error("Error al registrar la mascota");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };



  return (
    <>
      <form onSubmit={crearMascota}>
        <center>
          <h2 className="letraNegra">Información del canino</h2>
        </center>
        <br />

        <label className="letraNegra">Nombre</label>
        <input
          type="text"
          name="nombre"
          className="controls"
          placeholder="Nombre"
          value={Nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label className="letraNegra">Fecha de nacimiento</label>
        <input
          type="date"
          name="fechaNacimiento"
          className="controls"
          placeholder="Fecha de nacimiento"
          value={FechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
          required
        />

        <label className="letraNegra">Descripción</label>
        <textarea
          name="descripcion"
          className="controls"
          placeholder="Descripción"
          value={Descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>

        <label className="letraNegra">Peso en kilos</label>
        <input
          type="number"
          name="peso"
          className="controls"
          placeholder="Peso"
          value={Peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        <button type="submit" className="botons">
          Agregar Mascota
        </button>
      </form>

    </>
  );
};

export default FormularioMascota;
