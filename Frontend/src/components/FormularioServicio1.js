import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Mapa from './Mapa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './FormServicio.css';

export default function FormularioServicio({ onAgregarServicio }) {
    const [idState, setId] = useState(0);
    const [servicioState, setServicio] = useState('');
    const [nombreState, setNombre] = useState('');
    const [direccionState, setDireccion] = useState('');
    const [latitud, setLatitud] = useState(0);
    const [longitud, setLongitud] = useState(0);
    const navigate = useNavigate();

    // Obtén la geolocalización del usuario si está disponible
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLatitud(position.coords.latitude);
                setLongitud(position.coords.longitude);
            });
        }
    }, []);

    async function crearServicio(event) {
        event.preventDefault();
        setId(idState + 1);

        const servicio = {
            id: idState,
            nombre: nombreState,
            servicio: servicioState,
            direccion: direccionState,
            latitud,
            longitud,
        };

        try {
            const response = await fetch("http://A-PHZ2-CIDI-005:5000/api/servicio", {
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

    function handleMapClick(event) {
        const { lat, lng } = event.latlng;
        setLatitud(lat);
        setLongitud(lng);
    }

    return (
        <div className="Div-Form">
            <form onSubmit={crearServicio}>
                <h2 className="titulo">Información del servicio</h2>

                <label className="letraNegra">Nombre del servicio</label>
                <input type="text" name="nombre" className="controls" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
                <label className="letraNegra">Servicio</label>
                <select name="servicio" className="controls" onChange={(e) => setServicio(e.target.value)}>
                    <option value="Paseador">Paseador</option>
                    <option value="Adiestrador">Adiestrador</option>
                    <option value="Peluqueria">Peluquería</option>
                    <option value="Negocio">Negocio</option>
                    <option value="Guarderia">Guardería</option>
                    <option value="Veterinaria">Veterinaria</option>
                </select>
                <label className="letraNegra">Dirección</label>
                <input type="text" name="direccion" className="controls" placeholder="Dirección" onChange={(e) => setDireccion(e.target.value)} />

                <MapContainer center={[latitud, longitud]} zoom={12} style={{ height: "300px", width: "100%" }} onClick={handleMapClick}>
                    <TileLayer
                        attribution="OpenStreetMap"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                        <Marker position={[latitud, longitud]}>
                            <Popup>
                                Latitud: {latitud}, Longitud: {longitud}
                            </Popup>
                        </Marker>
                </MapContainer>

                <button type="submit" className="botons">Continuar</button>
            </form>
        </div>
    );
}
