import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers(
    {
        courses   //ES 6 syntax for short hand object - equavilent of course : course 

    }
);
export default rootReducer;