import React from "react";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import NoMatch from "./Components/NoMatch/NoMatch";
import Register from "./Components/Register/Register";

function App() {
  return (
    <Container className="App">
      <Router>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          <Route path="/home">
              <Home />
          </Route>
          <Route  path="/register/:charityname">
              <Register></Register>
            </Route>
          <Route  path="*">
              <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
