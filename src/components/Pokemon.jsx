import { useCallback, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

const Pokemon = () => {
    const [pokemon, setPokemon] = useState({});
    const [cargando, setCargando] = useState(true)
    const {name} = useParams();
    const navigate = useNavigate();

    const obtenerPokemon = useCallback( async () => {
        try{
            const endPoint = `https://pokeapi.co/api/v2/pokemon/${name}`;
            const respuesta = await fetch(endPoint);
            const datos = await respuesta.json();
            const pokemonSeleccionado = {
                id: datos.id,
                peso: datos.weight,
                name: datos.name.substring(0,1).toUpperCase() + datos.name.substring(1),
                imagen: datos.sprites.other.dream_world.front_default,
                tipo: datos.types.type,
                stats: datos.stats
            }
            setPokemon(pokemonSeleccionado)
        } catch(e) {
            console.log(`Error en obtenerPokemon:`, e.message);
        }
    });

    const volverAPokemones = () => {
        navigate(`/pokemones`);
    }

    useEffect(() => {
        console.log(name)
        if(name != undefined){
            obtenerPokemon();
            setCargando(false)
        } 
    }, [])
    return ( 
    <div className="pokemon__uno">
        {cargando ? (
            <div style={{marginTop: '160px'}}>
                <div>
                    <p style={{fontSize: '30px'}}>Debes seleccionar un pokémon en la vista de pokémones.</p>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button className="btn btn-danger" style={{marginTop: '10px'}} onClick={volverAPokemones}>Ir a Pokemones</button>
                </div>
            </div>
        ) :
            
            <div style={{display: 'flex', flexDirection: 'column'}}>
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
                                        <p style={{paddingRight: '5px'}}>{stat.stat.name.substring(0,1).toUpperCase() + stat.stat.name.substring(1)}: {stat.base_stat}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <button className="btn btn-danger boton" onClick={volverAPokemones}>Ir a Pokemones</button>
            </div>
        }
    </div>
  )
}

export default Pokemon