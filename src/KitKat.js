import { Link } from "react-router-dom";

/** KitKat
 * Show kitkat with link to vending machine
 * 
 * No props
 * No states
 * 
 * App -> KitKat
 */

function KitKat() {
  return (
    <div className="KitKat">
      <h1>KitKat!</h1>
      <p>
        <Link exact to="/">Go back to vending machine</Link>
      </p>
    </div>
  )
}

export default KitKat;