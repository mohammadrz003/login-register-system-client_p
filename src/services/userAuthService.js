import defaultHttp from "./defaultHttpService";
import authenticatedHttp from "./authenticatedHttpService";

export const registerUser = (data) => {
  return defaultHttp.post("/users/register", data);
};

export const loginUser = (data) => {
  return defaultHttp.post("/users/authenticate", data);
};

export const getUserProfile = () => {
  return authenticatedHttp.get("/users/authenticate");
};
