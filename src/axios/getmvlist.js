import axios from "axios";
export function mvlist(baseURL, offset) {
  const instance = axios.create({
    baseURL: baseURL,
  });
  return instance.get(baseURL + "/top/mv?limit=9&offset=" + offset * 9);
}
