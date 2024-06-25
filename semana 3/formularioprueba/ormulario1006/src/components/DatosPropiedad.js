import React, { useState } from 'react';

const DatosPropiedad = ({ onChange }) => {
  const [direccion, setDireccion] = useState('');
  const [tipo, setTipo] = useState('');

  const handleDireccionChange = (event) => {
    setDireccion(event.target.value);
    onChange({ direccion: event.target.value });
  };

  const handleTipoChange = (event) => {
    setTipo(event.target.value);
    onChange({ tipo: event.target.value });
  };

  return (
    <div className="container">
      <h2 className="mb-4">Datos de la Propiedad</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Dirección"
          value={direccion}
          onChange={handleDireccionChange}
        />
      </div>
      <div className="mb-3">
        <select className="form-select" value={tipo} onChange={handleTipoChange}>
          <option value="">Selecciona el tipo de propiedad</option>
          <option value="casa">Casa</option>
          <option value="apartamento">Apartamento</option>
          <option value="terreno">Terreno</option>
        </select>
      </div>
    </div>
  );
};

export default DatosPropiedad;
