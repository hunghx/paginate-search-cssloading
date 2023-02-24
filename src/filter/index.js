import { instances } from "../api/axios";

export const filter_list_products = async (page, number) => {
  let response = await instances.get(
    `products?_page=${page + 1}&_limit=${number}`
  );
  return response;
};
