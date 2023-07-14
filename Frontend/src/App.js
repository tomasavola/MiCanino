import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import FormularioMascota from './components/FormularioMascota'
import FormularioRegistro from './components/FormularioRegistrarse';
import Logo from './components/Logo'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import InicioSesion from './components/InicioSesion';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Salud from './components/Salud';
import PerfilMascota from './components/PerfilMascota';
import Otros from './components/Otros';
import OlvidoContrasena from './components/OlvidoContrasena';
import BrindaSerivcio from './components/BrindaServicio';
import FormularioServicio1 from './components/FormularioServicio1';
import FormularioServicio2 from './components/FormularioServicio2';
import Bienvenida from './components/Bienvenida';
import Configuracion from './components/Configuracion';
import Notificaciones from './components/Notificaciones';
import Logos from './components/Logos';
import FormularioEvento from './components/FormularioEvento';
import HistorialMedicamentos from './components/HistorialMedicamentos';
import Host from './components/Host'

function App() {
  const [arrayMascotas, setArrayMascotas] = useState([{ id: 0, nombre: "", fecha: "", descripcion: "", peso: 0 }]);
  const [arrayCuentas, setArrayCuentas] = useState([{ id: 0, nombre: "", apellido: "", mail: "", telefono: "", contrasena: "" }]);
  const [eventos, setEventos] = useState([]);
  const [medicamentos, setMedicamentos] = useState([]);

  function AgregarMascota(mascota) {
    console.log("hola");
    console.log(mascota);

    axios.post('http://' + Host + ':5000/api/caninos/', mascota)
      .then(response => {
        console.log(response.status);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function AgregarCuenta(cuenta) {
    console.log(cuenta);
    axios.post('http://' + Host + ':5000/api/caninos/usuario', cuenta)
      .then(response => {
        console.log(response.status);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function AgregarServicio(servicio) {
    console.log(servicio);
    axios.post('http://' + Host + ':5000/api/caninos/servicio', servicio)
      .then(response => {
        console.log(response.status);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function AgregarEvento(evento) {
    console.log(evento);
    axios.post('http://' + Host + ':5000/api/caninos/evento', evento)
      .then(response => {
        console.log(response.status);
        setEventos([...eventos, evento]);
      })
      .catch(error => {
        console.log(error);
      });
  }


  function IngresarCuenta(cuenta) {
    console.log(cuenta);
    axios.post('http://' + Host + ':5000/api/caninos/', cuenta)
      .then(response => {
        console.log(response.status);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function obtenerHistorialMedicamentos() {
    axios.get('http://' + Host + ':5000/api/caninos/HistorialMedicamentos')
      .then(response => {
        setMedicamentos(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <Router>
      <Routes>

        <Route path="/" element={
          <>
            <Logo />
            <div className="container">
              <div className="row">
                <div className="form-register">
                  <InicioSesion onIngresarCuenta={IngresarCuenta} />
                  <br></br>
                  <center><Link to="/FormularioRegistro">¿No tienes cuenta? Registrate aquí</Link></center>
                  <br></br>
                  <center><Link to="/OlvidoContrasena">¿Olvidaste tu contrasena?</Link></center>
                </div>
              </div>
            </div>
          </>
        } />

        <Route path="/OlvidoContrasena" element={
          <>
            <Logo />
            <div className="container">
              <div className="row">
                <div className="form-register">
                  <OlvidoContrasena />
                </div>
              </div>
            </div>
          </>
        } />

        <Route path="/BrindaServicio" element={
          <>
            <Logo />
            <div className="container">
              <div className="row">
                <div className="form-register">
                  <BrindaSerivcio />
                </div>
              </div>
            </div>
          </>
        } />

        <Route path="/Bienvenida" element={
          <>
            <Logo />
            <div className="container">
              <div className="row">
                <div className="form-register">
                  <Bienvenida />
                </div>
              </div>
            </div>
          </>
        } />

        <Route path="/FormularioRegistro" element={
          <>
            <Logo />
            <div className="container">
              <div className="row">
                <div className="form-register">
                  <FormularioRegistro onAgregarCuenta={AgregarCuenta} />
                </div>
              </div>
            </div>
          </>
        } />

        <Route path="/FormularioServicio1" element={
          <>
            <Logo />
            <div className="container">
              <div className="row">
                <div className="form-register">
                  <FormularioServicio1 onAgregarServicio={AgregarServicio} />
                </div>
              </div>
            </div>
          </>
        } />

        <Route path="/FormularioServicio2" element={
          <>
            <Logo />
            <div className="container">
              <div className="row">
                <div className="form-register">
                  <FormularioServicio2 onAgregarServicio2={AgregarServicio} />
                </div>
              </div>
            </div>
          </>
        } />

        <Route path="/FormularioMascota" element={
          <>
            <Logo />
            <div className="container">
              <div className="row">
                <div className="form-register">
                  <FormularioMascota onAgregarMascota={AgregarMascota} />
                </div>
              </div>
            </div>
          </>
        } />

        <Route path="/Home" element={
          <>
            <div className="container">
              <div className="row">
                <div className="form-register">
                  <Home />
                </div>
              </div>
            </div>
          </>
        } />

        <Route path="/Salud" element={
          <>
            <div className="container">
              <div className="row">
                <div className="form-register">
                  <Salud />
                </div>
              </div>
            </div>
          </>
        } />

        <Route path="/PerfilMascota" element={
          <>
            <div className="container">
              <div className="row">
                <div className="form-register">
                  <PerfilMascota />
                </div>
              </div>
            </div>
          </>
        } />

        <Route path="/Otros" element={
          <>
            <div className="container">
              <div className="row">
                <div className="form-register">
                  <Otros />
                </div>
              </div>
            </div>
          </>
        } />

        <Route path="/Configuracion" element={
          <>
            <div className="container">
              <div className="row">
                <div className="form-register">
                  <Configuracion />
                </div>
              </div>
            </div>
          </>
        } />

        <Route path="/Notificaciones" element={
          <>
            <div className="container">
              <div className="row">
                <div className="form-register">
                  <Notificaciones />
                </div>
              </div>
            </div>
          </>
        } />

        <Route path="/FormularioEvento" element={
          <>
            <div className="container">
              <div className="row">
                <div className="form-register">
                  <FormularioEvento onAgregarEvento={AgregarEvento} />
                </div>
              </div>
            </div>
          </>
        } />

        <Route path="/AgregarEvento" element={
          <>
            <div className="container">
              <div className="row">
                <div className="form-register">
                  <FormularioEvento onAgregarEvento={AgregarEvento} />
                </div>
              </div>
            </div>
          </>
        } />

        <Route path="/HistorialMedicamentos" element={
          <>
            <div className="container">
              <div className="row">
                <div className="form-register">
                  <HistorialMedicamentos />
                </div>
              </div>
            </div>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;