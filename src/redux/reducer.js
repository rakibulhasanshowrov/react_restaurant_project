
import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";
//need to use to combine the reducer 
import { combineReducers } from "redux";

//multiple Reducer for different component 
const dishReducer=(dishState=DISHES,action) =>{
  
  return dishState;
}

const commentReducer=(commentState=COMMENTS,action) => {
  console.log("Action:",action);
  if(action.type === "ADD_COMMENT"){
    let comment=action.payload;
    comment.id=commentState.length;
    comment.date=new Date().toDateString()
    //now update the state 
    return commentState.concat(comment);
    
  }
  return commentState;
}
export const Reducer =combineReducers({
  dishes:dishReducer,        ///since DISHES is passed from individual reducers thus we dont need the initial state code 
  comments:commentReducer
})