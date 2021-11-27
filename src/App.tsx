import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import LoginPage from "./components/LoginPage/LoginPage";
import RegistrationPage from "./components/RegistrationPage/RigristationPage";
import TodoListPage from "./components/TodosListPage/TodoListPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/registration" />
          </Route>
          <Route exact path="/registration">
            <RegistrationPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/profile/todo-list">
            <TodoListPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
