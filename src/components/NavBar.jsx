import { NavLink } from "react-router-dom";

const NavBar = () => {
    const setActive = ({isActive}) => (isActive ? 'active' : undefined);
  return (
    <div style={{textAlign: 'end', backgroundColor: 'grey', color: 'white'}}>
        <NavLink className={setActive} to='/'>
        Home
    </NavLink>
    &nbsp;&nbsp;
    <NavLink className={setActive} to='/pokemones'>
        Pokemones
    </NavLink>
    </div>
  )
}

export default NavBar