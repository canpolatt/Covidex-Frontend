import './App.css';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Dashboard from "./components/Dashboard";

function App() {
  return (
      <Router>
    <div className="App">
      <Switch>
          <Route exact path="/">
              <LoginForm/>
          </Route>
          <Route path="/register">
              <RegisterForm/>
          </Route>
          <Route path="/dashboard">
              <Dashboard/>
          </Route>
      </Switch>
    </div>
      </Router>
  );
}

export default App;
