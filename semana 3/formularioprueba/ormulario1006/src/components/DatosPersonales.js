import React, { useState } from 'react';

const DatosPersonales = ({ onChange }) => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [genero, setGenero] = useState('');
  const [pais, setPais] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const handleNombreUsuarioChange = (event) => {
    setNombreUsuario(event.target.value);
    onChange({ nombreUsuario: event.target.value });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    onChange({ email: event.target.value });
  };

  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
    onChange({ genero: event.target.value });
  };

  const handlePaisChange = (event) => {
    setPais(event.target.value);
    onChange({ pais: event.target.value });
  };

  const handleAceptaTerminosChange = (event) => {
    setAceptaTerminos(event.target.checked);
    onChange({ aceptaTerminos: event.target.checked });
  };

  return (
    <div className="container">
      <h2>Datos Personales</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Nombre de Usuario"
        value={nombreUsuario}
        onChange={handleNombreUsuarioChange}
      />
      <input
        type="email"
        className="form-control mb-3"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <div className="mb-3">
        <label className="mr-3">Género:</label>
        <div className="form-check form-check-inline">
          <input
            type="radio"
            className="form-check-input"
            value="Masculino"
            checked={genero === 'Masculino'}
            onChange={handleGeneroChange}
          />
          <label className="form-check-label">Masculino</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="radio"
            className="form-check-input"
            value="Femenino"
            checked={genero === 'Femenino'}
            onChange={handleGeneroChange}
          />
          <label className="form-check-label">Femenino</label>
        </div>
      </div>
      <select className="form-select mb-3" value={pais} onChange={handlePaisChange}>
        <option value="">Seleccione un país</option>
        <option value="Argentina">Argentina</option>
        <option value="Brasil">Brasil</option>
        <option value="Chile">Chile</option>
        <option value="Colombia">Colombia</option>
        {/* Agrega más opciones según sea necesario */}
      </select>
      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          checked={aceptaTerminos}
          onChange={handleAceptaTerminosChange}
        />
        <label className="form-check-label">Acepto los términos y condiciones</label>
      </div>
    </div>
  );
};

export default DatosPersonales;
