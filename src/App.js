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
      </Switch>
    </Router>
  );
}

export default App;
