"use client";
import { useEffect, useState } from "react";
import CardLoging from "../Components/Login/CardLoging";
import CardSuccess from "../Components/Login/CardSuccess";
import Logo from "../Components/Login/Logo";
import { useAuth } from "../context/auth";
import ModalLogin from "../Components/Login/Modal/Login";
import ModalForgot from "../Components/Login/Modal/Forgot";
import ModalSuccess from "../Components/Login/Modal/ForgotSuccess";
import ModalFailure from "../Components/Login/Modal/Failure";

export default function Home() {
  const {
    user,
    setUser,
    setLogin,
    forgetPassword,
    loading,
    error,
    forgotSuccess,
    forgotError,
    clearError,
  } = useAuth();
  const [failure, setFailure] = useState<string | undefined>(undefined);
  const [forgot, setForgot] = useState<boolean>(false);

  useEffect(() => {
    window.localStorage.clear();
    setUser(null);
  }, []);

  useEffect(() => {
    if (error) console.log({ error });
    if (error !== "Invalid user or password") {
      setFailure(error?.message!);
    } else setFailure(undefined);
  }, [error]);

  useEffect(() => {
    if (forgotError) console.log({ forgotError });
  }, [forgotError]);

  return (
    <div
      className={`${
        loading || user || failure || forgotError ? "bg-static2" : "bg-static"
      } bg-cover bg-center bg-fixed flex items-center min-h-screen justify-center flex-col w-screen h-screen`}
    >
      <div
        className="
          rounded-3xl bg-white
          h-75vh w-33vw p-10 pt-20
          shadow-xl ackdrop-blur-md backdrop-filter backdrop-blur-8 flex flex-col items-center justify-between"
      >
        <div className="flex flex-col w-full h-full">
          <Logo />

          <ModalLogin
            show={
              !forgot &&
              !loading &&
              !failure &&
              !forgotError &&
              !forgotSuccess &&
              !user
            }
            error={error}
            onSubmit={setLogin}
            setForgot={setForgot}
          />

          <ModalForgot
            show={forgot && !forgotSuccess && !forgotError && !user && !loading}
            onSubmit={forgetPassword}
            error={error}
            setForgot={setForgot}
          />

          <ModalSuccess
            show={forgotSuccess}
            onClick={() => {
              setForgot(false);
            }}
          />

          <CardLoging show={loading && !forgotError} />

          <CardSuccess show={!!user} />

          <ModalFailure
            show={!!failure || !!forgotError}
            onClick={() => clearError()}
            failure={failure}
            forgotError={forgotError}
          />
        </div>
      </div>
    </div>
  );
}
