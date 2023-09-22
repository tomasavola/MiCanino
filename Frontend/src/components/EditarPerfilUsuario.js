import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Logos from './Logos';
import FlechaVolver from './FlechaVolver';
import Host from './Host';

function EditarPerfilUsuario() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correoElectronico: '',
    telefono: '',
    contraseña: '',
  });

  useEffect(() => {
    const obtenerPerfilUsuario = async () => {
      try {
        const response = await axios.get(`http://${Host}:5000/api/usuarios/1`); // Reemplaza "1" con el ID del usuario que deseas editar
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error al obtener datos:', error);
        setIsLoading(false);
      }
    };

    obtenerPerfilUsuario();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://${Host}:5000/api/usuarios/1`, formData); // Reemplaza "1" con el ID del usuario que deseas editar
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
            <label>Apellido:</label>
            <input
              type="text"
              name="apellido"
              className="controls"
              placeholder="Apellido"
              value={formData.apellido}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Correo Electrónico:</label>
            <input
              type="email"
              name="correoElectronico"
              className="controls"
              placeholder="Correo Electrónico"
              value={formData.correoElectronico}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Teléfono:</label>
            <input
              type="tel"
              name="telefono"
              className="controls"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              name="contraseña"
              className="controls"
              placeholder="Contraseña"
              value={formData.contraseña}
              onChange={handleInputChange}
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

export default EditarPerfilUsuario;
