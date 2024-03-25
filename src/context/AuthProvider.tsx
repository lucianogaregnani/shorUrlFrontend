import { createContext, useState } from "react";

interface Token {
  token: string;
  expiresIn: number;
}

interface AuthContextType {
  isAuthenticated: boolean;
  accesToken: Token;
  changeIsAuthenticated: (value: boolean) => void;
  changeToken: (newToken: Token) => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  accesToken: {
    token: "",
    expiresIn: 0,
  },
  changeIsAuthenticated: () => {},
  changeToken: () => {},
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accesToken, setToken] = useState({
    token: "",
    expiresIn: 0,
  });

  const changeIsAuthenticated = (value: boolean) => {
    setIsAuthenticated(value);
  };

  const changeToken = (newToken: Token) => {
    setToken(newToken);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        accesToken: accesToken,
        changeIsAuthenticated,
        changeToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
