import axios from "axios";

export function searchaxios(baseURL, keyword, offset) {
  const instance = axios.create({ baseURL: baseURL, timeout: 5000 });
  return instance.get(
    baseURL + "/search?limit=30&offset=" + offset + "&keywords=" + keyword
  );
}
