import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost/api",
});

export default instance;

export function setUserToken(token: string) {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
