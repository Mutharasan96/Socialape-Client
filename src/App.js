import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import themeFile from "./utils/theme";
import "./App.css";
import jwtDecode from "jwt-decode";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import AuthRoute from "./utils/AuthRoute";

const theme = createMuiTheme(themeFile);

const token = localStorage.FBIToken;

let authenticated;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp) {
    const decodedToken = localStorage.FBIToken;
    if (decodedToken.exp * 1000 < Date.now()) {
      window.location.href = "/login";
      authenticated = false;
    } else {
      authenticated = true;
    }
  }
}

class App extends Component {
  state = {};
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
            <Router>
              <Navbar />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <AuthRoute
                    exact
                    path="/signup"
                    component={Signup}
                    authenticated={authenticated}
                  />
                  <AuthRoute
                    exact
                    path="/login"
                    component={Login}
                    authenticated={authenticated}
                  />
                </Switch>
              </div>
            </Router>
         </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
