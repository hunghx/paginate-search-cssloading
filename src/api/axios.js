import axios from "axios";
export const instances = axios.create({
  baseURL: "http://localhost:3000/",
});
