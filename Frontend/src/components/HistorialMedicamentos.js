import React, { useState, useEffect } from 'react';
import { RiDeleteBin2Line, RiEdit2Line } from 'react-icons/ri';
import NavBar from "./NavBar";
import Logos from "./Logos";
import FlechaVolver from './FlechaVolver';
import Host from './Host';
import axios from 'axios';

export default function HistorialMedicamentos() {
    const [medicamentos, setMedicamentos] = useState([]);
    const [medicamento, setMedicamento] = useState('');
    const [fecha, setFecha] = useState('');
    const [descripcion, setDescripcion] = useState('');

    useEffect(() => {
        // Recuperar medicamentos desde la API al cargar la página
        axios.get(`http://${Host}:5000/api/historial/`)
            .then(response => {
                setMedicamentos(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const agregarMedicamento = () => {
        if (medicamento && fecha && descripcion) {
            const nuevoMedicamento = {
                medicamento,
                fecha,
                descripcion,
            };
            // Enviar el nuevo medicamento a la API
            axios.post(`http://${Host}:5000/api/historial?`, nuevoMedicamento)
                .then(response => {
                    console.log(response.status);
                    // Recargar la lista de medicamentos desde la API
                    axios.get(`http://${Host}:5000/api/historial/`)
                        .then(response => {
                            setMedicamentos(response.data);
                        })
                        .catch(error => {
                            console.log(error);
                        });
                })
                .catch(error => {
                    console.log(error);
                });

            setMedicamento('');
            setFecha('');
            setDescripcion('');
        }
    };

    const editarMedicamento = (id) => {
        const medicamentoAEditar = medicamentos.find(m => m.id === id);
        if (medicamentoAEditar) {
            setMedicamento(medicamentoAEditar.medicamento);
            setFecha(medicamentoAEditar.fecha);
            setDescripcion(medicamentoAEditar.descripcion);
        }
    };

    const eliminarMedicamento = (id) => {
        // Eliminar el medicamento de la API
        axios.delete(`http://${Host}:5000/api/historial/${id}`)
            .then(response => {
                console.log(response.status);
                // Recargar la lista de medicamentos desde la API
                axios.get(`http://${Host}:5000/api/historial`)
                    .then(response => {
                        setMedicamentos(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });
    };

    const ordenarMedicamentosPorFecha = () => {
        const medicamentosOrdenados = [...medicamentos].sort((a, b) => {
            return new Date(b.fecha) - new Date(a.fecha);
        });
        setMedicamentos(medicamentosOrdenados);
    };

    return (
        <div className="container">
            <FlechaVolver />
            <Logos />
            <NavBar />
            <h1 className="TituloMedicamento">Historial de Medicamentos</h1>
            <table>
                <tbody>
                    {medicamentos.map(med => (
                        <tr key={med.id}>
                            <td className="letraNegra">{med.medicamento}</td>
                            <td className="letraNegra">{med.fecha}</td>
                            <td className="letraNegra">{med.descripcion}</td>
                            <td className="actions">
                                <button className='edit-button' onClick={() => editarMedicamento(med.id)}>
                                    <RiEdit2Line className="edit-icon" size={17} />
                                </button>
                                <button className='delete-button' onClick={() => eliminarMedicamento(med.id)}>
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
                    value={medicamento}
                    onChange={(e) => setMedicamento(e.target.value)}
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
