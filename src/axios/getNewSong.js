import axios from "axios";
export function newsong(baseURL) {
  const instance = axios.create({
    baseURL: baseURL,
  });
  return instance.get(baseURL + "/personalized/newsong");
}
