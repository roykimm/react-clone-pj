import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Pj1 from './components/Pj1/App';
import Pj2 from './components/Pj2/App';
import Pj3 from './components/Pj3/App';
import Pj4 from './components/Pj4/App';
import Pj5 from './components/Pj5/App';
import Bella from './components/Bella/App';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pj1">
          <Pj1 />
        </Route>
        <Route path="/pj2">
          <Pj2 />
        </Route>
        <Route path="/pj3">
          <Pj3 />
        </Route>
        <Route path="/pj4">
          <Pj4 />
        </Route>
        <Route path="/pj5">
          <Pj5 />
        </Route>
        <Route path="/bella">
          <Bella />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
