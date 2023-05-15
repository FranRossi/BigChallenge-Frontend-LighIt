import React, { createContext, useState } from "react";
import axios, { setUserToken } from "../helpers/axios/axiosConfig";
import * as SecureStore from "expo-secure-store";

type LoginResponse = {
  token: string;
  data: User;
};

export type User = {
  id: number;
  name: string;
  email: string;
  token: string;
};

export type AuthContextType = {
  login: (email: string, password: string) => void;
  logout: () => void;
  error: string | null;
  isLoading: boolean;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const AuthContext = createContext<AuthContextType>({
  login: () => {},
  logout: () => {},
  error: null,
  isLoading: false,
  user: null,
  setUser: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const login = (email: string, password: string) => {
    setIsLoading(true);
    axios
      .post<LoginResponse>("/login", {
        email,
        password,
        device_name: "mobile",
      })
      .then((response) => {
        const userResponse: User = {
          token: response.data.token,
          id: response.data.data.id,
          name: response.data.data.name,
          email: response.data.data.email,
        };

        setUser(userResponse);
        setError(null);
        SecureStore.setItemAsync("user", JSON.stringify(userResponse));
        setUserToken(userResponse.token);
      })
      .catch((error) => {
        let value = "";
        if (error.response.data.errors) {
          const errors = error.response.data.errors;
          const firstErrorKey = Object.keys(errors)[0];
          const firstErrorMessage = errors[firstErrorKey][0];
          value = firstErrorMessage;
        }
        const message = error.response.data.error?.message ?? value;
        setError(message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const logout = () => {
    setIsLoading(true);
    axios
      .post("/logout")
      .then((response) => {
        setError(null);
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data.message);
      })
      .finally(() => {
        setUser(null);
        setIsLoading(false);
        SecureStore.deleteItemAsync("user");
        setUserToken("");
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        error,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
