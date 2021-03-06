import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import KitKat from "./KitKat";
import Smoothie from "./Smoothie";
import Chips from "./Chips";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
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
          <Route>
            <p>Hello world!</p>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
