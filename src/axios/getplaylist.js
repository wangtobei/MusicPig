import axios from "axios";
export function playlist(baseURL,id) {
  const instance = axios.create({
    baseURL: baseURL,
  });
  return instance.get(baseURL + "/playlist/detail?id="+id);
}
