import history from "../reducers/history";

export const addPost = (postObject) => {
  return {
    type: "ADD_POST",
    payload: postObject,
  };
};

export const editPost = (id) => {
  return {
    type: "EDIT_POST",
    payload: id,
  };
};

export const replacePost = (postObj) => {
  return {
    type: "REPLACE_EDITED_POST",
    payload: postObj,
  };
};

export const deletePost = (id) => {
  return {
    type: "DELETE_POST",
    payload: id,
  };
};
