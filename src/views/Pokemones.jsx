import { useContext, useEffect, useState } from "react"
import { PokeContext } from "../context/PokeContext"
import { useNavigate } from "react-router-dom";
import Pokemon from "../components/Pokemon";

const Pokemones = () => {
    const [cargando, setCargando] = useState(true);
    const [pokemon, setPokemon] = useState('');
    const {pokemones, obtenerPokemones} = useContext(PokeContext);
    const navigate  = useNavigate();

    const mostrarPokemon = () => {
        navigate(`/pokemon/${pokemon}`);
    };

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
            <div className="select__class"> 
            <h1 style={{textAlign: 'center'}}>Selecciona un pokemon</h1>
            {cargando ? ('Cargando...') : 
                pokemones.length > 0 ? 
                (<div>
                    <select id='select' defaultValue={pokemon} onChange={(e) => setPokemon(e.target.value)} className="form-select form-select-xsm" aria-label="Default select example" name="pokemos">
                        <option selected >Selecciona tu pokemón</option>
                        {pokemones?.map((pokemon) => (       
                            <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
                        ))}
                </select> 
                <button onClick={mostrarPokemon}>Buscar</button>
                </div>) : ('Cargando...')
            }                  
        </div>
    </div>
  )
}

export default Pokemones