import axios from "axios";
export function recommend(baseURL,limit) {
  const instance = axios.create({
    baseURL: baseURL,
  });
  return instance.get(baseURL + "/personalized?limit="+limit);
}
