import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function FormularioServicio2({ onAgregarServicio2 }) {

    const [horarioState, setHorario] = useState('');
    const [telefonoState, setTelefono] = useState('');
    const [correoState, setCorreo] = useState('');
    const [descripcionState, setDescripcion] = useState('');
    const navigate = useNavigate();

    function crearServicio2(event) {

        event.preventDefault();

        let servicio2 = {
            horario: horarioState,
            telefono: telefonoState,
            correo: correoState,
            descripcion: descripcionState,
        }

        onAgregarServicio2(servicio2)
        agregarYNavegar();
    }

    function agregarYNavegar() {
        navigate('/Bienvenida');
    }

    return (
        <>
            <form onSubmit={crearServicio2}>
                { }
                <center><h2 className="letraNegra">Información del servicio</h2></center>
                <br></br>
                <label className="letraNegra">Horario</label>
                <input type="text" name="horario" className="controls" placeholder="Horario" onChange={(i) => setHorario(i.target.value)} />
                <label className="letraNegra">Telefono</label>
                <input type="text" name="telefono" className="controls" placeholder="Telefono" onChange={(i) => setTelefono(i.target.value)} />
                <label className="letraNegra">Correo electrónico</label>
                <input type="text" name="correo" className="controls" placeholder="Correo electrónico" onChange={(i) => setCorreo(i.target.value)} />
                <label className="letraNegra">Descripción</label>
                <textarea name="descripcion" className="controls" placeholder="Descripcion" onChange={(i) => setDescripcion(i.target.value)}></textarea>

                <button type="submit" className="botons">Confirmar</button>
            </form>
        </>
    );
}
