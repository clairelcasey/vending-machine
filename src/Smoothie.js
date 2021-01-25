import { Link } from "react-router-dom";

/** Smoothie
 * Show Smoothie with link to vending machine
 * 
 * No props
 * No states
 * 
 * App -> Smoothie
 */

function Smoothie() {
  return (
    <div className="Smoothie">
      <h1>Smoothie!</h1>
      <p>
        <Link exact to="/">Go back to vending machine</Link>
      </p>
    </div>
  )
}

export default Smoothie;