"use client";
import { signinApi, signupApi } from "@/services/authService";
import { SingInFormValuesType, SingUpFormValuesType } from "@/types/auth";
import { useRouter } from "next/navigation";
import { createContext, useContext, useReducer } from "react";
import React from "react";
import toast from "react-hot-toast";

type AuthContextType = {
  user: any;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: any;
  signin: (values: SingInFormValuesType) => Promise<void>;
  signup: (values: SingUpFormValuesType) => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  signin: async () => {},
  signup: async () => {},
});

export type stateType = {
  user: any;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: any;
};

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const authReducer = (state: stateType, action: any) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "signin":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case "signup":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

function AuthContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(
    authReducer,
    initialState
  );
  const router = useRouter();

  async function signin(values: SingInFormValuesType) {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signinApi(values);
      dispatch({ type: "signin", payload: user });
      toast.success(message);
      router.push("/profile");
    } catch (error: any) {
      const ErrorMessage = error?.response?.data.message;
      dispatch({ type: "rejected", payload: ErrorMessage });
      toast.error(ErrorMessage);
    }
  }

  async function signup(values: SingUpFormValuesType) {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signupApi(values);
      dispatch({ type: "signup", payload: user });
      toast.success(message);
      router.push("/profile");
    } catch (error: any) {
      const ErrorMessage = error?.response?.data.message;
      dispatch({ type: "rejected", payload: ErrorMessage });
      toast.error(ErrorMessage);
    }
  }

  return (
    <>
      <AuthContext.Provider
        value={{ user, isAuthenticated, isLoading, error, signin, signup }}
      >
        {children}
      </AuthContext.Provider>
      ;
    </>
  );
}

export default AuthContextProvider;

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("not found auth context");
  return context;
}
