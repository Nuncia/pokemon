import { createContext, useCallback, useEffect, useState } from 'react';

export const PokeContext = createContext();

export const PokeProvider = ({ children }) => {
   const [pokemones, setPokemones] = useState([]);
   const [pokemon, setPokemon] = useState({});

   const obtenerPokemones = useCallback(async () => {
      const endPoint = 'https://pokeapi.co/api/v2/pokemon';

      const respuesta = await fetch(endPoint);
      const datos = await respuesta.json();
      // console.log('pokemon: ', datos.results);
      setPokemones(datos.results);
   });

   const obtenerPokemon = useCallback(async (name) => {
      // console.log(name);
      const endPonit = `https://pokeapi.co/api/v2/pokemon/${name}`;
      const respuesta = await fetch(endPonit);
      const datos = await respuesta.json();
      setPokemon(datos);
      console.log('pokemon: ', pokemon);
   });

   useEffect(() => {
      obtenerPokemones();
   }, []);

   return (
      <PokeContext.Provider
         value={{ pokemones, pokemon, obtenerPokemones, obtenerPokemon }}
      >
         {children}
      </PokeContext.Provider>
   );
};
