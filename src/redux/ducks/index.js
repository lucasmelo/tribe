import { combineReducers } from "redux";
import login from "./login";
import register from "./register";
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    login,
    register,
    form: formReducer
});
