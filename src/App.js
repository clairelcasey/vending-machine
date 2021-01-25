import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import KitKat from "./KitKat";
import Smoothie from "./Smoothie";
import Chips from "./Chips";
// import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/kitkat">
          <KitKat />
        </Route>
        <Route exact path="/smoothie">
          <Smoothie />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
