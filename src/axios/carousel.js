import axios from "axios";

export function carousel(baseURL) {
  const instance = axios.create({ baseURL: baseURL, timeout: 5000 });
  return instance(baseURL + "/banner?type=0");
}
