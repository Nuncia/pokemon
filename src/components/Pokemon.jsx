import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PokeContext } from '../context/PokeContext';

const Pokemon = () => {
   const { pokemon, obtenerPokemon } = useContext(PokeContext);
   const [cargando, setCargando] = useState(true);
   const { name } = useParams();
   const navigate = useNavigate();

   const volverAPokemones = () => {
      navigate(`/pokemones`);
   };

   useEffect(() => {
      if (name != undefined) {
         console.log(name);
         obtenerPokemon(name);
         console.log(pokemon);
         setCargando(false);
      }
   }, []);
   return (
      <div className="pokemon__uno">
         {cargando ? (
            <div style={{ marginTop: '160px' }}>
               <div>
                  <p style={{ fontSize: '30px' }}>
                     Debes seleccionar un pokémon en la vista de pokémones.
                  </p>
               </div>
               <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button
                     className="btn btn-danger"
                     style={{ marginTop: '10px' }}
                     onClick={volverAPokemones}
                  >
                     Ir a Pokemones
                  </button>
               </div>
            </div>
         ) : (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
               <div className="card">
                  <div className="tarjeta">
                     <img
                        // src={pokemon.sprites}
                        style={{ width: '250px' }}
                        src={pokemon.sprites}
                        className="card-img-top pokemon__dos"
                        alt={pokemon.name}
                     />
                     <div className="peso">
                        <p style={{ color: 'white', fontWeight: '600' }}>
                           Peso {pokemon.weight}
                        </p>
                     </div>
                  </div>
                  <div>
                     <h4 className="card-title titulo">
                        N° {pokemon.id} - {pokemon.name}
                     </h4>
                     <div className="card-body carta__pokemon">
                        <p>
                           <strong>Estadísticas</strong>
                        </p>
                        {pokemon.stats?.map((stat) => (
                           <div
                              key={stat.stat.name}
                              style={{ display: 'flex', width: '160px' }}
                           >
                              <p style={{ paddingRight: '5px' }}>
                                 {stat.stat.name.substring(0, 1).toUpperCase() +
                                    stat.stat.name.substring(1)}
                                 : {stat.base_stat}
                              </p>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               <button
                  className="btn btn-danger boton"
                  onClick={volverAPokemones}
               >
                  Ir a Pokemones
               </button>
            </div>
         )}
      </div>
   );
};

export default Pokemon;
