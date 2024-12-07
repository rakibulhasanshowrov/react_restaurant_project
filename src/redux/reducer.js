
import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";
const initialState={
  dishes:DISHES ,
  comments:COMMENTS ,
}

export const Reducer =(state=initialState,action) =>{
  console.log("Action:",action);
  if(action.type === "ADD_COMMENT"){
    let comment=action.payload;
    comment.id=state.comments.length;
    comment.date=new Date().toDateString()
    //now update the state 
    return {
      ...state,
      comments:state.comments.concat(comment),
    }
    
  }
  
  return state;

}