import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from './Slicers/usersSlice';


const rootReducer = combineReducers({
  user: usersReducer ,
  

});

export default rootReducer;
