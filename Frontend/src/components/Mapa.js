import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon-2x.png';
import './Mapa.css';

const Mapa = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUbicaciones, setFilteredUbicaciones] = useState([]);
  const [userLocation, setUserLocation] = useState([-34.6037, -58.3816]);

  const obtenerUbicacionesDesdeAPI = async () => {
    try {
      const response = await fetch("http://A-PHZ2-CIDI-006:5000/api/ubicacion");
      const data = await response.json();
      console.log('Ubicaciones recibidas:', data);
      return data;
    } catch (error) {
      console.error('Error al obtener ubicaciones desde la API:', error);
      return [];
    }
  };

  useEffect(() => {
    obtenerUbicacionesDesdeAPI().then((ubicaciones) => {
      setFilteredUbicaciones(ubicaciones);
    });
  }, []);

  const customIcon = new Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/25/25613.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  const ChangeView = ({ center, zoom }) => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  };

  return (
    <div className="mapa-container">
      <div style={{ width: '100%', height: '400px' }}>
        <MapContainer center={userLocation} zoom={12} style={{ width: '100%', height: '100%' }}>
          <TileLayer
            attribution="OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ChangeView center={userLocation} zoom={12} />
          {userLocation && (
            <Marker position={userLocation} icon={customIcon}>
              <Popup>Ubicación actual</Popup>
            </Marker>
          )}

          {filteredUbicaciones && filteredUbicaciones.map((location) => {
            console.log('Ubicación 1:', location);
            return (
              location.Latitud !== undefined && location.Longitud !== undefined && (
                <Marker
                  key={location.Id}
                  position={[location.Latitud, location.Longitud]}
                  icon={customIcon} 
                >
                  <Popup>{location.Nombre}</Popup>
                </Marker>
              )
            );
          })}
        </MapContainer>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar dirección..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" onClick={() => setSearchQuery('')}>Limpiar</button>
      </div>
    </div>
  );
};

export default Mapa;
