import { instances } from "./axios";
export const PRO_GET_SERVICE = async () => {
    let reponse = await instances.get("products");
    return reponse.data
}
export const PRO_POST_SERVICE = async (newPro) => {
    await instances.post("products",newPro)
}
