import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./components/login/Container"
import RouterCollection from './Routes';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <LoginPage /> */}
      <BrowserRouter>
        <Switch>
          <Route path="/" render={r_props => (
            <RouterCollection {...r_props} />
          )} />
        </Switch>
      </BrowserRouter>
      {/* </header> */}
    </div>
  );
}

// npm link ./react_modules/react
export default App;
