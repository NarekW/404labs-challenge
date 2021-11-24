import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import RegistrationPage from "./components/RegistrationPage/RigristationPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/registration" />
          </Route>
          <Route path="/registration">
            <RegistrationPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
