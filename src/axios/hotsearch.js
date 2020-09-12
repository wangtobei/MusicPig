import axios from "axios";
export function hotsearch(baseURL) {
  const instance = axios.create({
    baseURL: baseURL,
  });
  return instance.get(baseURL + "/search/hot");
}
