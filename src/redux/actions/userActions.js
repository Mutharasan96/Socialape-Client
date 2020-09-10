import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../type";
import axios from "axios";
export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/login", userData) 
    .then((res) => {
      const FBIToken = `Bearer ${res.data.token}`;
      localStorage.setItem("FBIToken", `Bearer ${res.data.token}`);
      axios.defaults.headers.common["Authorization"] = FBIToken;
      dispatch(getUserData())
      dispatch({type: CLEAR_ERRORS})
      this.props.history.push("/");
    })
    .catch((err) => {
      dispatch({
          type:SET_ERRORS,
          payload:err.res.data
      })
    });
};

export const getUserData = () => (dispatch) => {
  axios
    .get("/user")
    .then((res) => {
      dispatch({
        type: SET_USER,
        payload: res.data,
      });
    })
    .catch((err) => console.err(err));
};
