import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function FormularioMascota({ onAgregarMascota }) {

    const [idState, setId] = useState(0);
    const [nombreState, setNombre] = useState('');
    const [fechaState, setFecha] = useState('');
    const [idRazaState, setIdRaza] = useState('');
    const [descripcionState, setDescripcion] = useState('');
    const [pesoState, setPeso] = useState('');
    /*const [fotoState, setFoto] = useState('');
    const [PartidaState, setPartida] = useState('');
    const [carnetState, setCarnet] = useState('');*/
    const navigate = useNavigate();


    function crearMascota(event) {

        event.preventDefault();
        setId(idState + 1)

        let mascota = {
            id: idState,
            nombre: nombreState,
            fecha: fechaState,
            idRaza: idRazaState,
            descripcion: descripcionState,
            peso: pesoState,
            /*foto: fotoState,
            partida:PartidaState,
            carnet:carnetState*/
        }

        onAgregarMascota(mascota)
        agregarYNavegar();
    }

    function agregarYNavegar() {
        navigate('/Home');
    }
   

    /*<label>Foto</label> ESTO VA ABAJO EN EL FORM
    <input type="file" name="foto" className="controls" placeholder="Inserte una foto del canino" onChange={(i) => setFoto(i.target.value)}/>
    <label>Partida de nacimiento</label>  
    <input type="file" name="partida" className="controls" placeholder="Inserte una foto de la partida de nacimiento del canino" onChange={(i) => setPartida(i.target.value)}></input>
    <label>Carnet de vacunacion</label>  
    <input type="file"name="carnet" className="controls" placeholder="Inserte una foto del carnet de vacunacion del canino" onChange={(i) => setCarnet(i.target.value)}></input> */

    return (
        <>
            <form onSubmit={crearMascota}>
                <center><h2 className="letraNegra">Información del canino</h2></center>
                <br></br>
                <label className="letraNegra">Nombre</label>
                <input type="text" name="nombre" className="controls" placeholder="Nombre" onChange={(i) => setNombre(i.target.value)} />
                <label className="letraNegra">Fecha de nacimiento</label>
                <input type="Date" name="fecha" className="controls" placeholder="Fecha de nacimiento" onChange={(i) => setFecha(i.target.value)} />
                <label className="letraNegra">Raza</label>
                <input type="text" name="idRaza" className="controls" placeholder="Raza" onChange={(i) => setIdRaza(i.target.value)} />
                <label className="letraNegra">Descripcion</label>
                <textarea name="descripcion" className="controls" placeholder="Descripcion" onChange={(i) => setDescripcion(i.target.value)}></textarea>
                <label className="letraNegra">Peso en kilos</label>
                <input type="text" name="peso" className="controls" placeholder="Peso" onChange={(i) => setPeso(i.target.value)} />

                <button type="submit" className="botons">Agregar Mascota</button>
            </form>
        </>
    );
}
