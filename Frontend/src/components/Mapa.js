import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const Mapa = ({ ubicaciones }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUbicaciones, setFilteredUbicaciones] = useState([]);
  const [userLocation, setUserLocation] = useState([0, 0]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
      },
      (error) => {
        console.error('Error obteniendo la ubicación del usuario:', error);
      }
    );
  }, []);

  useEffect(() => {
    if (ubicaciones) {
      const filteredLocations = ubicaciones.filter((location) =>
        location.nombre.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUbicaciones(filteredLocations);
    }
  }, [searchQuery, ubicaciones]);

  const customIcon = new L.Icon({
    iconUrl: 'icon.png', // Reemplaza con la URL de tu icono personalizado
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  return (
    <div className="mapa-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar ubicación..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <MapContainer center={userLocation} zoom={14} style={{ width: '100%', height: '500px' }}>
        <TileLayer
          attribution="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {userLocation && (
          <Marker position={userLocation} icon={customIcon}>
            <Popup>Tu ubicación actual</Popup>
          </Marker>
        )}
        {filteredUbicaciones.map((location) => (
          <Marker
            key={location.id}
            position={[location.latitud, location.longitud]}
            icon={customIcon}
          >
            <Popup>{location.nombre}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Mapa;
