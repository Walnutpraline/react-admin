import { combineReducers } from 'redux';
import { loginReducer } from './login';
import { FoldCollapsed } from './home';
export default combineReducers({
    loginReducer,
    FoldCollapsed
})