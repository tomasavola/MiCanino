import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import FormularioMascota from './components/FormularioMascota'
import Formulario from './components/Formulario';
import Logo from './components/Logo'
function App() {

  const [HandleClick, setHandleClick] = useState(false)

  const handleClick = (event) => {

  }

  const [arrayMascotas, setArrayMascotas] = useState([{ id: 0, nombre: "", fecha: "", descripcion: "", peso: 0, /*foto: "", partida: "", carnet: ""*/ }]);

  function AgregarMascota(mascota) {
    console.log(mascota);

    axios.post('http://10.152.2.107:5000/api/caninos/', mascota)

      .then(response => {
        console.log(response.status); //puede ser resultado tambien
      })
      .catch(error => {
        console.log(error);
      });
  }

  const [arrayCuentas, setArrayCuentas] = useState([{id:0, nombre:"", apellido:"", mail:"", telefono:"", contrasena:""}]);  
  
  function AgregarCuenta(cuenta){
    console.log(cuenta);
    axios.post('http://10.152.2.107:5000/api/CreateUsuario/', cuenta)

      .then(response => {
        console.log(response.status); //puede ser resultado tambien
      })
      .catch(error => {
        console.log(error);
      });

  }

  return (
    <>
      <Logo />  

      <div className="container">
          <div className="row">
            <div className="form-register">
              { }
              <Formulario onAgregarCuenta={AgregarCuenta} />
            </div>
          </div>
        </div>

        <Logo />  
        <div className="container">
          <div className="row">
            <div className="form-register">
              { }
              <FormularioMascota onAgregarMascota={AgregarMascota} />
            </div>
          </div>
        </div>
    </>
  );
}

export default App