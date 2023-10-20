
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormularioServicio({ onAgregarServicio }) {
    const [idState, setId] = useState(0);
    const [servicioState, setServicio] = useState('');
    const [nombreState, setNombre] = useState('');
    const [direccionState, setDireccion] = useState('');
    const navigate = useNavigate();

    async function crearServicio(event) {
        event.preventDefault();
        setId(idState + 1);

        const servicio = {
            id: idState,
            nombre: nombreState,
            servicio: servicioState,
            direccion: direccionState,
        };

        try {
            const response = await
                fetch("http://A-PHZ2-CIDI-005:5000/api/servicio", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(servicio),
                });

            if (response.ok) {
                onAgregarServicio(servicio);
                agregarYNavegar();
            } else {
                console.error("Error al enviar el servicio");
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    }

    function agregarYNavegar() {
        navigate('/FormularioServicio2');
    }

    return (
        <>
            <form onSubmit={crearServicio}>
                { }
                <center><h2 className="letraNegra">Información del
                    servicio</h2></center>
                <br></br>
                <label className="letraNegra">Nombre</label>
                <input type="text" name="nombre" className="controls"
                    placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
                <label className="letraNegra">Servicio</label>
                <select name="servicio" className="controls"
                    onChange={(i) => setServicio(i.target.value)}>
                    <option value="Paseador">Paseador</option>
                    <option value="Adiestrador">Adiestrador</option>
                    <option value="Peluqueria">Peluquería</option>
                    <option value="Negocio">Negocio</option>
                    <option value="Guarderia">Guardería</option>
                    <option value="Veterinaria">Veterinaria</option>
                </select>
                <label className="letraNegra">Direccion</label>
                <input type="text" name="direccion"
                    className="controls" placeholder="Direccion" onChange={(i) =>
                        setDireccion(i.target.value)} />

                <button type="submit" className="botons">Continuar</button>
            </form>
        </>
    );
}