import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Home'
import Inventory from './Inventory'
import Carinfo from './Carinfo';
function App() {
  return (
    <div className="app">
     <Router >
    <Switch>
    <Route exact path ='/'>
       <Home />
       </Route>

       <Route exact path ='/inventory'>
       <Inventory />
       </Route>


       <Route path ='/inventory/carinfo/:id'>
       <Carinfo />
       </Route>


      

      

    </Switch>




     </Router>
    </div>
  );
}





export default App;
