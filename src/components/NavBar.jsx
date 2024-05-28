import { NavLink } from 'react-router-dom';
import Bola from '../assets/pokemon.png';

const NavBar = () => {
   const setActive = ({ isActive }) => (isActive ? 'active' : 'inActive');
   return (
      <div className="navBar">
         <img
            src={Bola}
            style={{ width: '2.3%', paddingLeft: '6px', marginLeft: '10px' }}
            alt=""
         />
         <div style={{ marginLeft: '10px', display: 'flex' }}>
            {/* <NavLink className={setActive} to='/'>
              Home
            </NavLink> */}
            &nbsp;&nbsp;
            <NavLink className={setActive} to="/pokemones">
               Pokemones
            </NavLink>
            &nbsp;&nbsp;
            <NavLink className={setActive} to="/pokemon">
               Pokémon
            </NavLink>
         </div>
      </div>
   );
};

export default NavBar;
