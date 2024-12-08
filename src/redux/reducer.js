
import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";
//need to use to combine the reducer 
import { combineReducers } from "redux";
import * as actionTypes from './actionTypes'
//multiple Reducer for different component 
const dishReducer=(dishState=DISHES,action) =>{
  switch(action.type) {
    default:
      return dishState;
  }
 
}

const commentReducer=(commentState=COMMENTS,action) => {
  //using switch instead of if
  switch(action.type) {
    case actionTypes.ADD_COMMENT:
        let comment = action.payload;
        comment.id=commentState.length;
        comment.date=new Date().toDateString()
        //now update the state 
        return commentState.concat(comment);

    default:
      return commentState;
  }
  
}
export const Reducer =combineReducers({
  dishes:dishReducer,        ///since DISHES is passed from individual reducers thus we dont need the initial state code 
  comments:commentReducer
})