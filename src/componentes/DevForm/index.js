import React, { useState } from 'react';

const DevForm = ({ onSubmit }) => {

  const [latitude, setLatitude] = useState(-20.2917397);
  const [longitude, setLongitude] = useState(-40.2986506);
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  const HandleSubmit = async (e) => {
    e.preventDefault();
    
    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude
    });

    setGithubUsername('');
    setTechs('');
  }

  return (
    <form onSubmit={HandleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">Usuário do GitHub</label>
        <input 
          name="github_username" 
          id="githubuser_name" 
          value={github_username}
          onChange={e => setGithubUsername(e.target.value)}
          required
        />
      </div>
      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input 
          name="techs" 
          id="techs" 
          required
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />
      </div>
      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input 
            type="number" 
            name="latitude" 
            id="latitude" 
            required 
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input 
            type="number" 
            name="longitude" 
            id="longitude" 
            required 
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
          />
        </div>
      </div>
        <button type="submit">Salvar</button>
    </form>
  )
}

export default DevForm;