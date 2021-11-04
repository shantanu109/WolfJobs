import { combineReducers } from "redux";
import auth from './auth';
import search from './search';
import food from './food';
import history from './history';
import job from './job';
import application from './application'

export default combineReducers({
    auth,
    search,
    food,
    history,
    job,
    application
})