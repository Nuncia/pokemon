import { useCallback, useContext, useEffect, useState } from "react"
import { PokeContext } from "../context/PokeContext"

const Pokemones = () => {
    const [cargando, setCargando] = useState(true);
    const [pokemon, setPokemon] = useState('');
    const {pokemones, obtenerPokemones} = useContext(PokeContext);
    const [stats, setStats] = useState([]);

    const buscarPokemon = useCallback (async () => {
        const valorSelect = document.getElementById('select');
        const respuesta = await fetch(valorSelect.value);
        const dato = await respuesta.json();
        setStats(dato.stats);
        console.log(stats)
        console.log(dato.stats);
        const pokeDato = { 
            nombre: dato.name,
            stats: dato.stats,
            imagen: dato.sprites.back_default
        }
        setPokemon(pokeDato)
        console.log(pokemon)
    })

    useEffect(() => {
        if (pokemones.length == 0) {
            obtenerPokemones();
            setCargando(false);
        } else{
            setCargando(false);
        }
    }, [])

  return (
    <div className="select__class"> 
        <h1 style={{textAlign: 'center'}}>Selecciona un pokemon</h1>
        {cargando ? ('Cargando...') : 
            pokemones.length > 0 ? 
               <select id='select' className="form-select form-select-xsm" aria-label="Default select example" name="pokemos">
                     <option selected >Selecciona tu pokemón</option>
                     {pokemones?.map((pokemon) => (       
                        <option key={pokemon.name} value={pokemon.url}>{pokemon.name}</option>
                    ))}
               </select> : 'Cargando...'
            } 
            <br />
            <button onClick={buscarPokemon} className="btn btn-dark">Buscar</button>
        
            {<div className="card" style={{width: "18rem"}}>
            <img src={pokemon.imagen} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{pokemon.name}</h5>
              
            </div>
          </div>}
          
    </div>
  )
}

export default Pokemones