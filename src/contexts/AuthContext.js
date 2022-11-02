import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from "react";
import * as authService from "../api/authApi";
import { useLoading } from "./LoadingContext";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken
} from "../utils/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const { startLoading, stopLoading } = useLoading();

  const [user, setUser] = useState(null);

  const fetch = useCallback(async () => {
    try {
      if (getAccessToken()) {
        await getMe();
      }
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  }, [stopLoading]);

  useEffect(() => {
    startLoading();
    fetch();
  }, [startLoading, stopLoading, fetch]);

  const register = async (input) => {
    const res = await authService.register(input);
    addAccessToken(res.data.token);
    getMe();
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

  const updateAddress = async (input) => {
    await authService.updateAddress(input);
    fetch();
  };

  return (
    <AuthContext.Provider
      value={{ login, user, register, logout, updateAddress, fetch }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
