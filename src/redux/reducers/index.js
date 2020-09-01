import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    loginReducer,
    registerReducer,
    form: formReducer
});
