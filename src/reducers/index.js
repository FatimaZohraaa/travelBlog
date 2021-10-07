import { combineReducers } from "redux";
import { editPost } from "../actions";
import postsArray from "./postsData";

const showPostsReducer = (state = postsArray, action) => {
  const findAndReplace = (array, postObject) => {
    let newArray = [];
    array.forEach((post) => {
      if (post.id === postObject.id) {
        newArray.push(postObject);
      } else newArray.push(post);
    });
    return newArray;
  };

  if (action.type === "ADD_POST") {
    return [...state, action.payload];
  } else if (action.type === "REPLACE_EDITED_POST") {
    return findAndReplace(state, action.payload);
  } else if (action.type === "DELETE_POST") {
    console.log(state);
    let newState = state.filter((post) => post.id !== action.payload);
    console.log(newState);
    return newState;
  } else {
    return state;
  }
};

const editedPostReducer = (state = null, action) => {
  if (action.type === "EDIT_POST") {
    return action.payload;
  } else return state;
};

export default combineReducers({
  posts: showPostsReducer,
  editedPostId: editedPostReducer,
});
