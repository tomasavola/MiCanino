import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Logos from './Logos';
import FlechaVolver from './FlechaVolver';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import './Calendario.css';
import axios from 'axios';
import Host from './Host'

export default function Salud() {
  const navigate = useNavigate();
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());
  const [eventos, setEventos] = useState([]);
  const [medicamentos, setMedicamentos] = useState([]);

  useEffect(() => {
    obtenerEventos();
    obtenerMedicamentos();
  }, []);

  useEffect(() => {
    obtenerEventos();
  }, []);

  const obtenerEventos = () => {
    axios.get('http://' + Host + ':5000/api/caninos/EventosPorDia')
      .then(response => {
        setEventos(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const obtenerMedicamentos = () => {
    axios.get('http://' + Host + ':5000/api/caninos/HistorialMedicamentos')
      .then(response => {
        setMedicamentos(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };


  const cambiarFecha = (fecha) => {
    setFechaSeleccionada(fecha);
  };
 
  const handleDateSelect = (date) => {
    const eventosDelDia = eventos.filter(evento => {
      const fechaEvento = new Date(evento.fecha);
      return (
        fechaEvento.getDate() === date.getDate() &&
        fechaEvento.getMonth() === date.getMonth() &&
        fechaEvento.getFullYear() === date.getFullYear()
      );
    });
    console.log('Eventos del día:', eventosDelDia);
  };

  const handleVerMedicamentos = () => {
    navigate('/HistorialMedicamentos', { state: { medicamentos } });
  };

  return (
    <div>
      <FlechaVolver />
      <Logos />
      <div className="calendar-container">
        <Calendar
          onChange={cambiarFecha}
          value={fechaSeleccionada}
          className="custom-calendar"
          onClickDay={handleDateSelect}
        />{' '}
      </div>
      <button
        type="submit"
        className="botons"
        onClick={() => navigate('/FormularioEvento')}
      >
        Agregar evento
      </button>

      <button
        type="button"
        className="botons"
        onClick={handleVerMedicamentos}
      >
        Ver Medicamentos
      </button>

      <NavBar />
    </div>
  );
}
