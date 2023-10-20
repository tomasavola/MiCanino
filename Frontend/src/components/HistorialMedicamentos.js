import React, { useState, useEffect } from 'react';
import { RiDeleteBin2Line, RiEdit2Line } from 'react-icons/ri';
import NavBar from "./NavBar";
import Logos from "./Logos";
import FlechaVolver from './FlechaVolver';
import Host from './Host';
import axios from 'axios';

export default function HistorialMedicamentos() {
    const [medicamentos, setMedicamentos] = useState([]);
    const [nombre, setNombre] = useState('');
    const [fecha, setFecha] = useState('');
    const [descripcion, setDescripcion] = useState('');

    // Recuperar medicamentos almacenados en localStorage al cargar la página
    useEffect(() => {
        const medicamentosGuardados = localStorage.getItem('medicamentos');
        if (medicamentosGuardados) {
            setMedicamentos(JSON.parse(medicamentosGuardados));
        }
    }, []);

    const agregarMedicamento = () => {

        axios.post('http://' + Host + ':5000/api/historial/', )
      .then(response => {
        console.log(response.status);
      })
      .catch(error => {
        console.log(error);
      });

        if (nombre && fecha && descripcion) {
            const nuevoMedicamento = {
                nombre,
                fecha,
                descripcion,
            };
            const nuevosMedicamentos = [...medicamentos, nuevoMedicamento];
            setMedicamentos(nuevosMedicamentos);
            setNombre('');
            setFecha('');
            setDescripcion('');
            // Almacenar los medicamentos en localStorage
            localStorage.setItem('medicamentos', JSON.stringify(nuevosMedicamentos));
        }
    };

    const eliminarMedicamento = (index) => {
        const nuevosMedicamentos = medicamentos.filter((_, i) => i !== index);
        setMedicamentos(nuevosMedicamentos);
        // Actualizar medicamentos en localStorage
        localStorage.setItem('medicamentos', JSON.stringify(nuevosMedicamentos));
    };

    const editarMedicamento = (index) => {
        const medicamentoAEditar = medicamentos[index];
        setNombre(medicamentoAEditar.nombre);
        setFecha(medicamentoAEditar.fecha);
        setDescripcion(medicamentoAEditar.descripcion);
        eliminarMedicamento(index);
    };

    const ordenarMedicamentosPorFecha = () => {
        const medicamentosOrdenados = [...medicamentos].sort((a, b) => {
            return new Date(b.fecha) - new Date(a.fecha);
        });
        setMedicamentos(medicamentosOrdenados);
        // Actualizar medicamentos ordenados en localStorage
        localStorage.setItem('medicamentos', JSON.stringify(medicamentosOrdenados));
    };

    return (
        <div className="container">
            <FlechaVolver />
            <Logos />
            <NavBar />
            <h1 className="TituloMedicamento">Historial de Medicamentos</h1>
            <table>
                <tbody>
                    {medicamentos.map((medicamento, index) => (
                        <tr key={index}>
                            <td className="letraNegra">{medicamento.nombre}</td>
                            <td className="letraNegra">{medicamento.fecha}</td>
                            <td className="letraNegra">{medicamento.descripcion}</td>
                            <td className="actions">
                                <button className='edit-button' onClick={() => editarMedicamento(index)}>
                                    <RiEdit2Line className="edit-icon" size={17} />
                                </button>
                                <button className='delete-button' onClick={() => eliminarMedicamento(index)}>
                                    <RiDeleteBin2Line className="delete-icon" size={17} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="add-form">
                <input
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="controls"
                />
                <input
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    className="controls"
                />
                <input
                    type="text"
                    placeholder="Descripción"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    className="controls"
                />
                <button onClick={agregarMedicamento} className="add-button">Agregar</button>
                <button onClick={ordenarMedicamentosPorFecha} className="add-button">Ordenar por fecha</button>
            </div>
        </div>
    );
}
