import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './EliminarCuenta.css';
import axios from "axios";

export default function EliminarCuenta() {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleEliminarCuenta = async () => {
        try {
            // Llama a la API para eliminar la cuenta
            const response = await axios.delete('URL_DE_LA_API_ELIMINAR_CUENTA');

            if (response.status === 200) {
                // Cuenta eliminada exitosamente, redirige al usuario a la pantalla de inicio de sesión
                eliminarYNavegar();
            } else {
                // Maneja el caso en que la API no responda correctamente
                console.log('Error al eliminar la cuenta');
            }
        } catch (error) {
            // Maneja los errores de conexión o de la API
            console.error('Error:', error);
        }
    };

    function eliminarYNavegar() {
        setShowPopup(false); // Cierra el pop-up
        navigate('/'); // Redirige al usuario
    }

    return (
        <div className="eliminar-cuenta-container">
            <h1>Eliminar Cuenta</h1>
            <p>¿Estás seguro de que deseas eliminar tu cuenta?</p>
            <div className="button-container">
                <button className="confirm-button" onClick={handleEliminarCuenta}>Sí</button>
                <button className="cancel-button" onClick={() => setShowPopup(false)}>No</button>
            </div>
            {showPopup && (
                <div className="popup-background">
                    <div className="popup">
                        <p>¿Estás seguro de que deseas eliminar tu cuenta?</p>
                        <div className="button-container">
                            <button className="confirm-button" onClick={handleEliminarCuenta}>Sí</button>
                            <button className="cancel-button" onClick={() => setShowPopup(false)}>No</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}