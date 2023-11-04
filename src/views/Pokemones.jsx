import { useContext, useEffect, useState } from "react"
import { PokeContext } from "../context/PokeContext"

const Pokemones = () => {
    const [cargando, setCargando] = useState(true)
    const {pokemones, obtenerPokemones} = useContext(PokeContext);


    useEffect(() => {
        if (pokemones.length == 0) {
            obtenerPokemones();
            setCargando(false);
        } else{
            setCargando(false);
        }
    }, [])

  return (
    <div> 
        <h1 style={{textAlign: 'center'}}>Selecciona un pokemon</h1>
        {cargando ? ('Cargando...') : 
            pokemones.length > 0 ? 
               <select name="pokemos" id="">
                     {pokemones?.map((pokemon) => (
                        <option key={pokemon.na} value={pokemon.name}></option>
                    ))}
               </select> : 'Cargando...'
            } 
    </div>
  )
}

export default Pokemones