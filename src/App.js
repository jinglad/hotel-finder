import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';

function App() {
  return (
    <Router>
      <h1>Test</h1>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
