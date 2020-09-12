import axios from "axios";
export function musicDetail(baseURL, id) {
  const instance = axios.create({ baseURL: baseURL, timeout: 5000 });
  return instance.get(baseURL + "/song/detail?ids=" + id);
}
