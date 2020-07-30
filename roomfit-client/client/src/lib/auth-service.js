import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }
  signup({ email, password, nombre, apellidos, username, provincia, edad }) {
    return this.auth
      .post("/signup", { email, password, nombre, apellidos, username, provincia, edad })
      .then(({ data }) => data);
  }

  login({ email, password }) {
    return this.auth
      .post("/login", { email, password })
      .then(({ data }) => data);
  }

  users() { 
    return this.auth.get("/users").then(({ data }) => data);
  }

  logout() {
    return this.auth.post("/logout", {}).then(({ data }) => data);
  }

  default() {
    return this.auth.get("/").then(({ data }) => data);
  }

}

const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;
