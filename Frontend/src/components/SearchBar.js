import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [busqueda, setBusqueda] = useState('');

  const handleInputChange = (event) => {
    setBusqueda(event.target.value);
  };

  const handleSearch = () => {
    console.log('Realizando búsqueda:', busqueda);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={busqueda}
        onChange={handleInputChange}
        placeholder="Buscar..."
      />
      <button type="button" onClick={handleSearch}>
        <FaSearch size={18}/>
      </button>
    </div>
  );
};

export default SearchBar;
