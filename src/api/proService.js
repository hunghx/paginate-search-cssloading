import { async } from "@firebase/util";
import { instances } from "./axios";
export const PRO_GET_SERVICE = async () => {
  let reponse = await instances.get("products");
  return reponse.data;
};
export const PRO_POST_SERVICE = async (newPro) => {
  await instances.post("products", newPro);
};
export const PRO_SAGA_DELETE = async (idDel) => {
  await instances.delete("products/" + idDel);
};
export const PRO_SAGA_UPDATE = async (proUpdate) => {
  await instances.put("products/" + proUpdate.id, proUpdate);
};
