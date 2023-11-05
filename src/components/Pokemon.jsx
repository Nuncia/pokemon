import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const Pokemon = () => {
    const [pokemon, setPokemon] = useState({});
    const {name} = useParams();

    const obtenerPokemon = useCallback( async () => {
        try{
            const endPoint = `https://pokeapi.co/api/v2/pokemon/${name}`;
            const respuesta = await fetch(endPoint);
            const datos = await respuesta.json();
            const pokemonSeleccionado = {
                name: datos.name.substring(0,1).toUpperCase() + datos.name.substring(1),
                imagen: datos.sprites.front_default,
                stats: datos.stats
            }
            setPokemon(pokemonSeleccionado)
        } catch(e) {
            alert(`Error en obtenerPokemon:`, e.message);
        }
    });

    useEffect(() => {
        obtenerPokemon();
    }, [])
    return (
    <div style={{marginTop: '40px', display: 'flex', justifyContent: 'center'}}>
        <div className="card">
            
            <img src={pokemon.imagen} className="card-img-top pokemon" alt="..."/>
            <div >
            <h4 style={{textAlign: 'start'}} className="card-title">{pokemon.name}</h4>
                <div className="card-body" >
                    {
                        pokemon.stats?.map((stat) => (
                            <div key={stat.stat.name} style={{display: 'flex', width: '160px'}}>
                                <p style={{paddingRight: '5px'}}><strong>{stat.stat.name}: </strong>{stat.base_stat}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pokemon