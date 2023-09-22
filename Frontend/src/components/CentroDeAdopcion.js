import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Host from './Host';
import NavBar from './NavBar';
import Logos from './Logos';
import FlechaVolver from './FlechaVolver';

function CentroDeAdopcion() {
  
  return (
    <div>
      <FlechaVolver />
      <Logos />
      <h1>Centro De Adopcion</h1>


      <NavBar />

    </div>
  );
}

export default CentroDeAdopcion;
