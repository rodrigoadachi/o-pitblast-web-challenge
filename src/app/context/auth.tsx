"use client";
import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useMutation } from "@apollo/client";
import { QUERY_LOGIN, QUERY_FORGOT } from "../../query/auth";
import { AuthContextProps } from "../types/auth";

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { push } = useRouter();
  const [user, setUser] = useState<iAuth | null>(null);
  const [forgotSuccess, setForgotSuccess] = useState<boolean>(false);
  const [forgotError, setForgotError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [menuShow, setMenuShow] = useState<boolean>(false);
  const [login, resultLogin] = useMutation(QUERY_LOGIN);
  const [forgotPassword, resultForgot] = useMutation(QUERY_FORGOT);

  useEffect(() => {
    setLoading(resultLogin?.loading || resultForgot?.loading);
  }, [resultLogin?.loading, resultForgot?.loading]);

  useEffect(() => {
    setError(resultLogin?.error?.message || resultForgot?.error?.message);
  }, [resultLogin?.error, resultForgot?.error]);

  const setLogin = async (loginData: iUserlogin) => {
    event?.preventDefault();

    try {
      await login({
        variables: {
          email: loginData.email,
          password: loginData.password,
        },
      });

      if (!resultLogin?.data?.login?.jwt) {
        setUser(null);
        window.localStorage.clear();
        return { error: error };
      }
    } catch (error) {
      setUser(null);
      window.localStorage.clear();
      return { error: error };
    }

    let authData: iAuthReturn = resultLogin?.data?.login;

    const payload: iAuth = {
      userId: authData?.user?._id,
      jwt: authData?.jwt,
    };
    window.localStorage.setItem("token", authData?.jwt);
    setUser(payload);

    setTimeout(() => push("/protected"), 3000);
    return payload;
  };

  const forgetPassword = async (dataForget: iForgot) => {
    event?.preventDefault();
    try {
      await forgotPassword({
        variables: {
          email: dataForget.email,
        },
      });
      return true;
    } catch (err) {
      setForgotError(err?.message!);
      return err?.message;
    }
  };

  const clearSuccess = () => {
    setForgotSuccess(false);
  };

  const clearError = () => {
    setForgotError(null);
  };

  const logout = async () => {
    window.localStorage.clear();
    await setUser(null);
    await push("/login");
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        setLogin,
        forgetPassword,
        logout,
        loading,
        error,
        forgotSuccess,
        clearSuccess,
        forgotError,
        clearError,
        menuShow,
        setMenuShow,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth, AuthContext };
