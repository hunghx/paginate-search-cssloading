import * as actionTypes from "./constants/actionTypes";
//product
export const act_get_pro = () => {
  return {
    type: actionTypes.PRO_GET,
  };
};
export const act_success_pro = (actionType, data) => {
  return {
    type: actionType,
    payload: data,
  };
};
export const act_post_pro = (newPro) => {
  return {
    type: actionTypes.PRO_POST,
    payload: newPro,
  };
};
//user
export const act_get_user = () => {
  return {
    type: actionTypes.USER_GET,
  };
};
export const act_post_user = (newUser) => {
  return {
    type: actionTypes.USER_POST,
    payload: newUser,
  };
};
export const act_success_user = (actionType, data) => {
  return {
    type: actionType,
    payload: data,
  };
};
export const act_delete_pro = (idDel) => {
  return {
    type: actionTypes.PRO_DELETE,
    payload: idDel,
  };
};
export const act_update_pro = (proUpdate) => {
  return {
    type: actionTypes.PRO_UPDATE,
    payload: proUpdate,
  };
};
