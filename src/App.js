import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import "./App.css";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

const theme = createMuiTheme({
  primary: {
    light: "#33c9dc", 
    main: "#00bcd4",
    dark: "#008394",
    contrastText: "#fff",
  },
  secondary: {
    light: "#ff6333",
    main: "#ff3d00",
    dark: "#b22a00",
    contrastText: "#fff",
  },
  typography: {
    useNextVariants: true,
  },
});

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
