import { createContext, useCallback, useEffect, useState } from "react";

export const PokeContext = createContext();

export const PokeProvider = ({children}) => {
   const [pokemones, setPokemones] = useState([]);

   const obtenerPokemones = useCallback ( async() => {
    const endPoint = 'https://pokeapi.co/api/v2/pokemon';

    const respuesta = await fetch(endPoint);
    const datos = await respuesta.json();

    console.log(datos.results)
    setPokemones(datos.results)
   })

   useEffect(() => {
    obtenerPokemones();
   }, []);

    return(
        <PokeContext.Provider value={{pokemones, obtenerPokemones}}>
            {children}
        </PokeContext.Provider>
    );
};