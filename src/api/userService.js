import { instances } from "./axios";
export const USER_GET_SERVICE = async () => {
  let reponse = await instances.get("users");
  return reponse.data;
};
export const USER_POST_SERVICE = async (newUser) => {
  let res = await instances.post("users", newUser);
  return res.data;
};
