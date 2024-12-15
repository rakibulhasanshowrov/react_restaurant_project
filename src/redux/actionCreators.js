import * as actionTypes from "./actionTypes"

export const addComment= (dishId,rating,author,comment) =>{
  return {
    type:actionTypes.ADD_COMMENT,
    payload:{
      dishId:dishId,
      author:author,
      rating:rating,
      comment:comment,
    }
  }
}

// export const loadDishes= dishes =>{
//   type:actionTypes.LOAD_DISHES,
//   payload: dishes;
// }

// export const dishLoading = () =>{
//   type:actionTypes.DISHESH_LOADING,
  
// }

// export const fetchDishes =()=>{
//   return dispatch =>{
//     dispatch(dishLoading());
//     dispatch
//   }
// }