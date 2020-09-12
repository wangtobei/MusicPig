import axios from "axios";
export function mvdetail(baseURL, id) {
  const instance = axios.create({ baseURL: baseURL, timeout: 5000 });
  return instance.get(baseURL + "/mv/detail?mvid=" + id);
}

export function mvurl(baseURL, id) {
  const instance = axios.create({ baseURL: baseURL, timeout: 5000 });
  return instance.get(baseURL + "/mv/url?id=" + id + "&r=1080");
}
