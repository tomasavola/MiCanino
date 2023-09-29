import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import { FaMapMarkerAlt } from 'react-icons/fa';

import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon-2x.png';
import './Mapa.css';

const Mapa = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUbicaciones, setFilteredUbicaciones] = useState([]);
  const [userLocation, setUserLocation] = useState([-34.6037, -58.3816]);

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

    if (searchQuery === '') {
      // Si el campo de búsqueda está vacío, mostramos todas las ubicaciones.
      setFilteredUbicaciones(ubicaciones);
    } else {
      // Filtramos las ubicaciones en función del nombre ingresado.
      const filteredLocations = ubicaciones.filter((location) =>
        location.nombre.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUbicaciones(filteredLocations);
    }
  }, [searchQuery]);

  const redIcon = new Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/25/25613.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    color:red,
  });
  
  const blueIcon = new Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/25/25612.png',
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
        <MapContainer center={userLocation} zoom={14} style={{ width: '100%', height: '100%' }}>
          <TileLayer
            attribution="OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ChangeView center={userLocation} zoom={12} />
          {userLocation && (
  <Marker position={userLocation} icon={redIcon}>
    <Popup>Ubicación actual</Popup>
  </Marker>
)}

{filteredUbicaciones.map((location) => (
  <Marker
    key={location.id}
    position={[location.latitud, location.longitud]}
    icon={blueIcon}
  >
    <Popup>{location.nombre}</Popup>
  </Marker>
))}
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
