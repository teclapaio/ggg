import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const publicKey = 'TU_CLAVE_PUBLICA'; // Reemplaza con tu clave pública de la API de Marvel
        const timestamp = Date.now();
        const hash = 'TU_HASH'; // Reemplaza con el hash generado utilizando tu clave privada y el timestamp

        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`);
        setCharacters(response.data.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Character List</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;