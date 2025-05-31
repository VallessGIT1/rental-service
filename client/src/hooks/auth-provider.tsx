import React, { createContext, useState, useEffect, ReactNode } from "react";
import apiClient from "../api/api";
import { AuthorizationStatus } from "../const";

export interface User {
  id: number;
  email: string;
  username: string;
  avatar: string;
  isPro: boolean;
}

interface AuthContextType {
  token: string;
  user: User | null;
  status: string
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  token: "",
  user: null,
  status: "",
  login: async () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {

  const [token, setToken] = useState<string | null>(
      localStorage.getItem("token") || null
  );

  const [user, setUser] = useState<User | null>(null);

  const [authStatus, setAuthStatus] = useState(localStorage.getItem("status") || null);

  useEffect(() => {
    if (token) {
      apiClient.get<User>("/login")
      .then((response) => {
        setUser(response.data);
        setAuthStatus(AuthorizationStatus.Auth);
      })
      .catch(() => {
        setToken(null);
        setAuthStatus(AuthorizationStatus.NoAuth);
      });
    } else {
      setAuthStatus(AuthorizationStatus.NoAuth);
    }
  }, [token]);

  const login = async (email: string, password: string) => {
    const response = await apiClient.post("/login", { email, password });
    setToken(response.data.token);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("status", AuthorizationStatus.Auth);
    setAuthStatus(AuthorizationStatus.Auth);
  };

  const logout = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("status");
    setAuthStatus(AuthorizationStatus.NoAuth);
  }

  return (
      <AuthContext.Provider value={{ token, user, authStatus, login, logout }}>
        {children}
      </AuthContext.Provider>
  );
}