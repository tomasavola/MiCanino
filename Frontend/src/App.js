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

function App() {
  const [arrayMascotas, setArrayMascotas] = useState([{ id: 0, nombre: "", fecha: "", descripcion: "", peso: 0 }]);
  const [arrayCuentas, setArrayCuentas] = useState([{ id: 0, nombre: "", apellido: "", mail: "", telefono: "", contrasena: "" }]);

  function AgregarMascota(mascota) {
    console.log("hola");
    console.log(mascota);
    let host = 'A-PHZ2-CIDI-005' //ponerlo en los url de las api

    axios.post('http://A-PHZ2-CIDI-005:5000/api/caninos/', mascota)
      .then(response => {
        console.log(response.status);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function AgregarCuenta(cuenta) {
    console.log(cuenta);
    axios.post('http://10.152.2.107:5000/api/caninos/usuario', cuenta)
      .then(response => {
        console.log(response.status);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function IngresarCuenta(cuenta) {
    console.log(cuenta);
    axios.post('http://10.152.2.107:5000/api/caninos/', cuenta)
      .then(response => {
        console.log(response.status);
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
            <Logo />
            <NavBar />
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
            <Logo />
            <NavBar />
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
            <Logo />
            <NavBar />
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
            <Logo />
            <NavBar />
            <div className="container">
              <div className="row">
                <div className="form-register">
                  <Otros />
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