import { createContext, useContext, useEffect, useState } from "react";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken
} from "../utils/localStorage";
import * as authService from "../api/authApi";
import { toast } from "react-toastify";
const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        if (getAccessToken()) {
          await getMe();
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, []);

  const register = async (input) => {
    try {
      const res = await authService.register(input);
      addAccessToken(res.data.token);
      getMe();
    } catch (err) {
      toast.error(err.response?.data?.message);
      console.log(err);
    }
  };

  const login = async (input) => {
    try {
      const res = await authService.login(input);
      addAccessToken(res.data.token);
      getMe();
    } catch (err) {
      toast.error(err.response?.data?.message);
      console.log(err);
    }
  };

  const logout = () => {
    setUser(null);
    removeAccessToken();
  };

  const getMe = async () => {
    const res = await authService.getMe();
    setUser(res.data.user);
  };

  return (
    <AuthContext.Provider value={{ login, user, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
