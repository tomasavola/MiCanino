import React, { useState } from 'react';
import './App.css';
import Titulo from './components/Titulo.js'
import FormularioMascota from './components/FormularioMascota'
import Logo from './components/Logo'
function App() {

  const [arrayMascotas, setArrayMascotas] = useState([{ id: 0, nombre: "", fecha: "", descripcion: "", peso: 0, /*foto: "", partida: "", carnet: ""*/ }]);

  function agregarMascota(mascota) {
    setArrayMascotas(
      [
        ...arrayMascotas,
        mascota
      ]
    )
  }

  return (
    <>
      <Logo />
 
      <div className="container">
        <div className="row">
          <div className="form-register">
            { }
            <FormularioMascota onAgregarMascota={agregarMascota} />
          </div>
        </div>
      </div>
    </>
  );
  /*const [arrayCuentas, setArrayCuentas] = useState([{id:0, nombre:"", apellido:"", mail:"", telefono:"", contrasena:""}]);  
  
  function agregarCuenta(cuenta){
      setArrayCuentas(
          [
              ...arrayCuentas,
              cuenta
          ]            
      )
  }

  return (
      <>    
          <Titulo/>
          <div className="container">
              <div className="row">
                  <div className="one-half column">
                      {}
                      <h2>CREAR CUENTA</h2>
                      <Formulario onAgregarCuenta={agregarCuenta}/>
                  </div>                  
              </div>
          </div>        
      </>
  );*/
}

export default App