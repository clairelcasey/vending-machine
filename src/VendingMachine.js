import { Link } from "react-router-dom";

/** VendingMachine
 * Show all snacks with links to snack routes
 * 
 * No props
 * No states
 * 
 * App -> VendingMachine
 */

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <h1>Vending Machine!</h1>
      <ul>
        <li>
          <Link to="/kitkat">KitKat</Link>
        </li>
        <li>
          <Link to="/smoothie">Smoothie</Link>
        </li>
        <li>
          <Link to="/chips">Chips</Link>
        </li>
      </ul>
    </div>

  )
}

export default VendingMachine;