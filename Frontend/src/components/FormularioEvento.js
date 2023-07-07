import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function FormularioEvento({ onAgregarEvento }) {

    const [fechaState, setFecha] = useState('');
    const [descripcionState, setDescripcion] = useState('');
    const navigate = useNavigate();


    function crearEvento(event) {

        event.preventDefault();

        let evento = {
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
            <form onSubmit={crearEvento}>
                <label className="letraNegra">Fecha del evento</label>
                <input type="Date" name="fecha" className="controls" placeholder="Ingrese la fecha del evento" onChange={(i) => setFecha(i.target.value)} />
                <label className="letraNegra">Descripcion</label>
                <textarea name="descripcion" className="controls" placeholder="Descripcion" onChange={(i) => setDescripcion(i.target.value)}></textarea>

                <button type="submit" className="botons">Agregar Evento</button>
            </form>
        </>
    );
}
