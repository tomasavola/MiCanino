import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import { FaMapMarkerAlt } from 'react-icons/fa';

import 'leaflet/dist/leaflet.css'; // Importa los estilos de Leaflet
import 'leaflet/dist/images/marker-icon-2x.png'; // Importa el ícono predeterminado de Leaflet

const Mapa = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUbicaciones, setFilteredUbicaciones] = useState([]);
  const [userLocation, setUserLocation] = useState([-34.6037, -58.3816]); // Coordenadas del Obelisco

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
    // Puedes cargar tus ubicaciones aquí si lo deseas
    const ubicaciones = [
      {
        id: 1,
        nombre: 'Obelisco',
        latitud: -34.6037,
        longitud: -58.3816,
      },
      {
        id: 2,
        nombre: 'Cementerio de la Chacarita',
        latitud: -34.5877631,
        longitud: -58.4589195,
      },
      { 
        id: 3,
        nombre: 'Patio de Messi',
        latitud: 40.4530428,
        longitud: -3.6909086,
      },
      { 
        id: 4,
        nombre: 'La Bombonera',
        latitud: -34.6356064,
        longitud: -58.3696272,
      },
    ];

    if (ubicaciones) {
      const filteredLocations = ubicaciones.filter((location) =>
        location.nombre.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUbicaciones(filteredLocations);
    }
  }, [searchQuery]);

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
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar dirección..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <MapContainer center={userLocation} zoom={14} style={{ width: '100%', height: '100%' }}>
          <TileLayer
            attribution="OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ChangeView center={userLocation} zoom={12} />
          {userLocation && (
            <Marker position={userLocation} icon={customIcon}>
              <Popup>Ubicacion actual</Popup>
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
    </div>
  );
};

export default Mapa;
