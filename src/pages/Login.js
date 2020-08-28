import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Proptypes from "prop-types";
import Appicon from "../images/icon.png";
import axios from "axios";

// MUI imports
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = {
  form: {
    textAlign: "center",
  },
  image: {
    margin: "20px auto 20px auto",
  },
  pageTitle: {
    margin: "5px auto 5px auto",
  },
  textField: {
    margin: "5px auto 5px auto",
  },
  button: {
    marginTop: 20,
  },
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loading: false,
      error: {},
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("/login", userData)
      .then((res) => {
        console.log(res.data);
        this.setState({
          loading: false,
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        this.setState({
          errors: err.response.data,
          loading: false,
        });
      });
  };
  render() {
    const { classes } = this.props;
    const { errors, loading } = this.state;
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <img src={Appicon} alt="monkeyImage" className={classes.image} />
          <Typography variant="h2" className={classes.pageTitle}>
            Social Ape
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              className={classes.textField}
              
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              className={classes.textField}
              
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Login
            </Button>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

Login.prototypes = {
  classes: Proptypes.object.isRequired,
};

export default withStyles(styles)(Login);
