import {NavLink} from "react-router-dom";
import "./NavBar.css";

/** NavBar component
 * 
 * App -> NavBar
 */

function NavBar(props) {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">Vending Machine</NavLink>
      <NavLink exact to="/kitkat">KitKat</NavLink>
      <NavLink exact to="/smoothie">Smoothie</NavLink>
      <NavLink exact to="/chips">Chips</NavLink>
    </nav>
  )
}

export default NavBar;