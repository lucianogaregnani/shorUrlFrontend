/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { User } from "../types/User.type";
import { authApi } from "../services/authApi";

function useAuth() {
  const {
    accesToken: token,
    changeIsAuthenticated,
    changeToken,
    isAuthenticated,
  } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    authApi
      .getRefreshToken()
      .then((res) => {
        changeToken(res);
        changeIsAuthenticated(true);
        setIsLoading(false);
      })
      .catch((err) => setError(err.message));
  }, []);

  const login = async ({ email, password }: User) => {
    setIsLoading(true);
    try {
      const accesToken = await authApi.login({ email, password });
      changeToken(accesToken);
      changeIsAuthenticated(true);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const changeError = (newError: string) => {
    setError(newError);
  };

  return {
    token,
    login,
    isLoading,
    error,
    isAuthenticated,
    changeError,
    changeToken,
    changeIsAuthenticated,
  };
}

export default useAuth;
