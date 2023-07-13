import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavBar from './NavBar';
import { useNavigate } from "react-router-dom";
import FlechaVolver from './FlechaVolver';

export default function FormularioEvento({ onAgregarEvento }) {

    const [fechaState, setFecha] = useState('');
    const [nombreState, setNombre] = useState('');
    const [descripcionState, setDescripcion] = useState('');
    const navigate = useNavigate();


    function crearEvento(event) {

        event.preventDefault();

        let evento = {
            nombre:nombreState,
            fecha: fechaState,
            descripcion: descripcionState,
        }

        onAgregarEvento(evento)
        agregarYNavegar();
    }

    function agregarYNavegar() {
        navigate('/Salud');
    }

    return (
        <>
            <FlechaVolver />
            <p className="Titulo">AGREGAR EVENTO AL CALENDARIO</p>
            <br></br>
            <form onSubmit={crearEvento}>
                <label className="letraNegra">Nombre del evento</label>
                <input type="Text" name="nombre" className="controls" placeholder="Ingrese el nombre del evento" onChange={(i) => setNombre(i.target.value)} />
                <label className="letraNegra">Fecha del evento</label>
                <input type="Date" name="fecha" className="controls" placeholder="Ingrese la fecha del evento" onChange={(i) => setFecha(i.target.value)} />
                <label className="letraNegra">Descripcion</label>
                <textarea name="descripcion" className="controls" placeholder="Descripcion" onChange={(i) => setDescripcion(i.target.value)}></textarea>

                <button type="submit" className="botons">Agregar Evento</button>
            </form>
            <NavBar />
        </>
    );
}
