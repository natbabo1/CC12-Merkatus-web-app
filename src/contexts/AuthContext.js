import { createContext, useContext, useEffect, useState } from "react";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/localStorage";
import * as authService from "../api/authApi";
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
      } finally {
      }
    };

    fetch();
  }, []);
  const register = async (input) => {
    await authService.register(input);
  };

  const login = async (input) => {
    const res = await authService.login(input);
    addAccessToken(res.data.token);
    getMe();
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
