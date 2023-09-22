import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Logos from './Logos';
import FlechaVolver from './FlechaVolver';
import Host from './Host';

function EditarPerfil() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    nombre: '',
    raza: '',
    fechaNacimiento: '',
    descripcion: '',
    peso: '',
    partidaNacimiento: null, // Cambiamos a null para almacenar la imagen
    carnetVacunacion: null, // Cambiamos a null para almacenar la imagen
  });

  useEffect(() => {
    const obtenerPerfilCanino = async () => {
      try {
        const response = await axios.get(`http://${Host}:5000/api/caninos/3`); // Reemplaza "3" con el ID del canino que deseas editar
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error al obtener datos:', error);
        setIsLoading(false);
      }
    };

    obtenerPerfilCanino();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileInputChange = (e, fieldName) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const fileData = event.target.result;
      setFormData({
        ...formData,
        [fieldName]: fileData, // Almacena la imagen como datos base64
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://${Host}:5000/api/caninos/3`, formData); // Reemplaza "3" con el ID del canino que deseas editar
      navigate(-1); // Regresamos a la página anterior utilizando navigate con valor -1
    } catch (error) {
      console.error('Error al editar el perfil:', error);
    }
  };

  return (
    <div>
      <FlechaVolver />
      <Logos />
      <NavBar />
      <h1>Editar Perfil</h1>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <form className="letraNegra" onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              className="controls"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Raza:</label>
            <input
              type="text"
              name="raza"
              className="controls"
              placeholder="Raza"
              value={formData.raza}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Fecha de Nacimiento:</label>
            <input
              type="Date"
              name="fechaNacimiento"
              className="controls"
              placeholder="Fecha de Nacimiento"
              value={formData.fechaNacimiento}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Descripción:</label>
            <input
              type="text"
              name="descripcion"
              className="controls"
              placeholder="Descripcion"
              value={formData.descripcion}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Peso en kilos:</label>
            <input
              type="text"
              name="peso"
              className="controls"
              placeholder="Peso (kg)"
              value={formData.peso}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Partida de Nacimiento:</label>
            <input
              type="file"
              name="partidaNacimiento"
              className="controls"
              onChange={(e) => handleFileInputChange(e, 'partidaNacimiento')}
            />
          </div>
          <div>
            <label>Carnet de Vacunación:</label>
            <input
              type="file"
              name="carnetVacunacion"
              className="controls"
              onChange={(e) => handleFileInputChange(e, 'carnetVacunacion')}
            />
          </div>
          <button type="submit" className="botons">
            Guardar Cambios
          </button>
        </form>
      )}
    </div>
  );
}

export default EditarPerfil;
