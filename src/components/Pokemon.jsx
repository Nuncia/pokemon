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
                id: datos.id,
                peso: datos.weight,
                tipos: datos.types,
                name: datos.name.substring(0,1).toUpperCase() + datos.name.substring(1),
                imagen: datos.sprites.other.dream_world.front_default,
                tipo: datos.types.type,
                stats: datos.stats
            }
            setPokemon(pokemonSeleccionado)
            console.log(datos)
        } catch(e) {
            alert(`Error en obtenerPokemon:`, e.message);
        }
    });

    useEffect(() => {
        obtenerPokemon();
    }, [])
    return (
    <div className="pokemon__uno">
        <div className="card"> 
            <div className="tarjeta">
                <img src={pokemon.imagen} className="card-img-top pokemon__dos" alt={pokemon.name}/>
                <div className="peso">
                    <p style={{color: 'white', fontWeight: '600'}}>Peso {pokemon.peso}</p>
                </div>
            </div>
            <div >
            <h4 className="card-title titulo">N° {pokemon.id} -  {pokemon.name}</h4>
                <div className="card-body carta__pokemon" >
                    <p><strong>Estadísticas</strong></p>
                    {
                        pokemon.stats?.map((stat) => (
                            <div key={stat.stat.name} style={{display: 'flex', width: '160px'}}>
                                <p style={{paddingRight: '5px'}}>{stat.stat.name}: {stat.base_stat}</p>
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