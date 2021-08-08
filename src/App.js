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
      </Switch>
    </Router>
  );
}

export default App;
