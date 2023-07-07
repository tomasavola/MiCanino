import React from 'react'
import FormularioEvento from './FormularioEvento'

export default function AgregarEvento() {
  return (
    <div>
        <FormularioEvento onAgregarEvento={AgregarEvento}/>
    </div>
  )
}
