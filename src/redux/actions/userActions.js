import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../type";

export const loginUser = (userData) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/login", userData)
    .then((res) => {
      console.log(res.data);
      this.setState({
        loading: false,
      });
      const FBIToken = `Bearer ${res.data.token}`;
      localStorage.setItem("FBIToken", `Bearer ${res.data.token}`);
      axios.defaults.headers.common["Authorization"] = FBIToken;
      this.props.history.push("/");
    })
    .catch((err) => {
      this.setState({
        errors: err.response.data,
        loading: false,
      });
    });
};

export const getUserData = () => (dispatch) => {};
