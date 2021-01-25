import { Link } from "react-router-dom";

/** Chips
 * Show Chips with link to vending machine
 * 
 * No props
 * No states
 * 
 * App -> Chips
 */

function Chips() {
  return (
    <div className="Chips">
      <h1>Chips!</h1>
      <p>
        <Link exact to="/">Go back to vending machine</Link>
      </p>
    </div>
  )
}

export default Chips;