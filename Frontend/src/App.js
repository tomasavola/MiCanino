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

function App() {
  const [arrayMascotas, setArrayMascotas] = useState([{ id: 0, nombre: "", fecha: "", descripcion: "", peso: 0 }]);
  const [arrayCuentas, setArrayCuentas] = useState([{ id: 0, nombre: "", apellido: "", mail: "", telefono: "", contrasena: "" }]);

  function AgregarMascota(mascota) {
    console.log(mascota);

    axios.post('http://10.152.2.107:5000/api/caninos/', mascota)
      .then(response => {
        console.log(response.status);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function AgregarCuenta(cuenta) {
    console.log(cuenta);
    axios.post('http://10.152.2.107:5000/api/CreateUsuario/', cuenta)
      .then(response => {
        console.log(response.status);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function IngresarCuenta(cuenta) {
    console.log(cuenta);
    axios.post('http://10.152.2.107:5000/api/CreateUsuario/', cuenta)
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
                  <Link to="/FormularioRegistro">¿No tienes cuenta? Registrate aquí</Link>
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
            <NavBar/>
            <div className="container">
              <div className="row">
                <div className="form-register">
                  <Home />
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