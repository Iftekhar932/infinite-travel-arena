import authContext from "../context/authProvider";
import { useContext } from "react";
const useAuth = () => {
  const auth = useContext(authContext);
  return auth;
};

export default useAuth;
