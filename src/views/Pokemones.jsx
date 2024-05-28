import { useContext, useEffect, useState } from 'react';
import { PokeContext } from '../context/PokeContext';
import { useNavigate } from 'react-router-dom';

const Pokemones = () => {
   const [cargando, setCargando] = useState(true);
   const [pokemon, setPokemon] = useState('');
   const { pokemones, obtenerPokemones } = useContext(PokeContext);
   const navigate = useNavigate();

   const mostrarPokemon = () => {
      if (pokemon !== '') {
         // console.log('pokemon: ', pokemon);
         navigate(`/pokemon/${pokemon}`);
      } else {
         alert('Debes seleccionar un pokémon.');
      }
   };

   useEffect(() => {
      if (pokemones.length == 0) {
         obtenerPokemones();
         setCargando(false);
      } else {
         setCargando(false);
      }
   }, []);

   return (
      <div>
         <div className="select__class">
            <h1 style={{ textAlign: 'center' }}>Selecciona un pokémon</h1>
            {cargando ? (
               'Cargando...'
            ) : pokemones.length > 0 ? (
               <div className="select__dos">
                  <select
                     id="select"
                     defaultValue={pokemon}
                     onChange={(e) => setPokemon(e.target.value)}
                     className="form-select"
                     aria-label="Default select example"
                     name="pokemos"
                  >
                     <option value="Selecciona tu pokémon">
                        Selecciona tu pokémon
                     </option>
                     {pokemones?.map((pokemon) => (
                        <option key={pokemon.name} value={pokemon.name}>
                           {pokemon.name}
                        </option>
                     ))}
                  </select>
                  <button
                     className="btn btn-danger"
                     style={{ marginTop: '10px' }}
                     onClick={mostrarPokemon}
                  >
                     Ver detalle
                  </button>
               </div>
            ) : (
               'Cargando...'
            )}
         </div>
      </div>
   );
};

export default Pokemones;
