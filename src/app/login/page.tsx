"use client";
import { useForm } from "react-hook-form";
import { InputLabel } from "../Components/Form/InputLabel";
import IconCheck from "../Components/Icon/Check";
import { useEffect, useState } from "react";
import { TextWelcome } from "../Components/Login/TextWelcome";
import { TextOps } from "../Components/Login/TextOps";
import { TextToReset } from "../Components/Login/TextToReset";
import IconArrowBack from "../Components/Icon/ArrowBack";
import IconSend from "../Components/Icon/Send";
import { TextSend } from "../Components/Login/TextSend";
import { TextFailure } from "../Components/Login/TextFailure";
import CardExclamation from "../Components/Login/CardExclamation";
import CardLoging from "../Components/Login/CardLoging";
import CardSuccess from "../Components/Login/CardSuccess";
import Logo from "../Components/Login/Logo";
import { useAuth } from "../context/auth";

export default function Home() {
  const {
    user,
    setUser,
    setLogin,
    forgetPassword,
    logout,
    loading,
    error,
    forgotSuccess,
    forgotError,
    clearError,
  } = useAuth();
  const { handleSubmit, register } = useForm();
  const [failure, setFailure] = useState<string | undefined>(undefined);
  const [forgot, setForgot] = useState<boolean>(false);
  const [send, setSend] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    window.localStorage.clear();
    setUser(null);
  }, []);

  useEffect(() => {
    if (error?.message !== "Invalid user or password")
      setFailure(error?.message!);
  }, [error]);

  return (
    <div
      className={`${
        loading || user || failure || forgotError ? "bg-static2" : "bg-static"
      } bg-cover bg-center bg-fixed flex items-center min-h-screen justify-center flex-col w-screen h-screen`}
    >
      <div className="rounded-3xl bg-white w-[576px] h-[932px] shadow-xl ackdrop-blur-md backdrop-filter backdrop-blur-8 flex flex-col items-center justify-between">
        <Logo />

        <div className="mb-[37px]">
          {!forgot &&
            !loading &&
            !success &&
            !failure &&
            !forgotError &&
            !forgotSuccess &&
            !user && (
              <>
                <div className="mt-[50px] flex flex-col w-[356px] top-16 text-primary-gray text-left text-base font-normal leading-5 tracking-normal text-gray-500">
                  {!error && <TextWelcome />}
                  {error && <TextOps />}
                </div>

                <form
                  onSubmit={handleSubmit(setLogin)}
                  className="grid gap-y-5 mt-5 px-5 xl:max-w-[350px] xl:min-w-[350px]"
                >
                  <InputLabel
                    label="E-mail or Username"
                    placeholder="user@e-mail.com"
                    name="email"
                    className="pt-[37px] w-[356px]"
                    error={!!error}
                    register={register}
                  />

                  <InputLabel
                    type="password"
                    label="Password"
                    placeholder="*********"
                    className="w-[356px]"
                    name="password"
                    error={!!error}
                    register={register}
                  />

                  <div
                    onClick={() => setForgot(true)}
                    className="flex justify-end text-base w-[356px] cursor-pointer"
                  >
                    <span className="underline text-[#DD052B] pr-1">
                      Forgot
                    </span>
                    your password?
                  </div>

                  <div className="w-[356px] flex justify-end">
                    <div className="w-[136px] flex flex-col">
                      <button className="mt-[52px] w-[136px] h-[136px] rounded-2xl bg-red-600 grid place-content-center">
                        <IconCheck width={80} height={80} />
                      </button>

                      <div className="mt-4 w-[136px] h-[32px] flex flex-rol gap-x-1 text-center text-red-600 font-bold italic">
                        <span className="w-[64px]">
                          {!!error && <>wrong login</>}
                        </span>
                        <span className="w-[64px]">
                          {!!error && <>fail login</>}
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </>
            )}

          {forgot && !forgotSuccess && !forgotError && !user && (
            <>
              <div className="mt-[87px] flex flex-col w-[356px] top-16 text-primary-gray text-left text-base font-normal leading-5 tracking-normal text-gray-500">
                <TextToReset />
              </div>

              <form
                onSubmit={handleSubmit(forgetPassword)}
                className="grid gap-y-5 mt-5 px-5 xl:max-w-[350px] xl:min-w-[350px]"
              >
                <InputLabel
                  label="E-mail"
                  placeholder="user@e-mail.com"
                  name="email"
                  className="pt-[37px] w-[356px]"
                  error={!!error}
                  register={register}
                />

                <div className="mt-[173px] mb-[83px] w-[100%] flex gap-x-[84px] justify-center">
                  <button
                    onClick={() => setForgot(false)}
                    className="w-[136px] h-[136px] cursor-pointer"
                  >
                    <IconArrowBack width={84} height={84} />
                  </button>
                  <button className="w-[136px] h-[136px] rounded-2xl bg-red-600 grid place-content-center cursor-pointer">
                    <IconSend width={80} height={80} className="w-200" />
                  </button>
                </div>
              </form>
            </>
          )}

          {forgotSuccess && (
            <>
              <TextSend />

              <div className="w-[356px] flex justify-end mb-[80px]">
                <button
                  onClick={() => {
                    setForgot(false);
                    setSend(false);
                  }}
                  className="mt-[52px] w-[136px] h-[136px] rounded-2xl bg-red-600 grid place-content-center"
                >
                  <IconCheck width={80} height={80} className="w-200" />
                </button>
              </div>
            </>
          )}

          {loading && <CardLoging />}

          {user && <CardSuccess />}

          {(failure || forgotError) && (
            <div
              onClick={() => clearError()}
              className="flex flex-col gap-y-[35px] items-center justify-center cursor-pointer"
            >
              <CardExclamation />
              <TextFailure message={`[${failure || forgotError}`} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
