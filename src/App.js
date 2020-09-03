import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import themeFile  from './utils/theme'
import "./App.css";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

const theme = createMuiTheme(themeFile);

const token = localStorage.FBIdToken;

if(token){

}

class App extends Component {
  state = {};
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
