import { useState } from "react";

export default function FormularioMascota({onAgregarMascota}) {

    const [idState, setId] = useState(0);
    const [nombreState, setNombre] = useState('');
    const [fechaState, setFecha] = useState('');
    const [idRazaState, setIdRaza] = useState('');
    const [descripcionState, setDescripcion] = useState('');
    const [pesoState, setPeso] = useState('');
    const [fotoState, setFoto] = useState('');
    const [PartidaState, setPartida] = useState('');
    const [carnetState, setCarnet] = useState('');

    function crearMascota(i){

        i.preventDefault();
        setId(idState + 1)

        let mascota = {
            id: idState,
            nombre: nombreState,
            fecha: fechaState,
            idRaza: idRazaState,
            descripcion:descripcionState,
            peso:pesoState,
            foto: fotoState,
            partida:PartidaState,
            carnet:carnetState
        } 

        onAgregarMascota(mascota)

    }

    return (
    <>
        <form onSubmit={(i) => crearMascota(i)}>
            {}

            <label>Nombre</label>
            <input type="text" name="nombre" className="controls" placeholder="Nombre" onChange={(i) => setNombre(i.target.value)}/>
            <label>Fecha de nacimiento</label>
            <input type="Date" name="fecha" className="controls" placeholder="Fecha de nacimiento" onChange={(i) => setFecha(i.target.value)}/>
            <label>Raza</label>
            <input type="text" name="idRaza" className="controls" placeholder="Raza" onChange={(i) => setIdRaza(i.target.value)}/>
            <label>Descripcion</label>  
            <textarea name="descripcion" className="controls" placeholder="Descripcion" onChange={(i) => setDescripcion(i.target.value)}></textarea>
            <label>Peso en kilos</label>  
            <textarea name="peso" className="controls" placeholder="Peso (KG)" onChange={(i) => setPeso(i.target.value)}></textarea>
            <label>Foto</label>
            <input type="file" name="foto" className="controls" placeholder="Inserte una foto del canino" onChange={(i) => setFoto(i.target.value)}/>
            <label>Partida de nacimiento</label>  
            <input type="file" name="partida" className="controls" placeholder="Inserte una foto de la partida de nacimiento del canino" onChange={(i) => setPartida(i.target.value)}></input>
            <label>Carnet de vacunacion</label>  
            <input type="file"name="carnet" className="controls" placeholder="Inserte una foto del carnet de vacunacion del canino" onChange={(i) => setCarnet(i.target.value)}></input>         
         

            <button type="submit" className="botons">Crear mascota</button>

        </form>
    </>
    );
}
  