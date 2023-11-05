import { NavLink } from "react-router-dom";

const NavBar = () => {
    const setActive = ({isActive}) => (isActive ? 'active' : 'inActive');
  return (
    <div className="navBar">
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