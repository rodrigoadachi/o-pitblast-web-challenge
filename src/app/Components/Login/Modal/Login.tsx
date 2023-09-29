import { Dispatch, FormEventHandler, SetStateAction } from "react";
import { InputLabel } from "../../Form/InputLabel";
import IconCheck from "../../Icon/Check";
import { TextOps } from "../TextOps";
import { TextWelcome } from "../TextWelcome";
import { FieldValues, UseFormRegister, useForm } from "react-hook-form";

type props = {
  show: boolean;
  error: string | undefined;
  onSubmit: (user: iUserlogin) => void;
  setForgot: Dispatch<SetStateAction<boolean>>;
};
export default function ModalLogin({
  show,
  error,
  onSubmit,
  setForgot,
}: props) {
  const { handleSubmit, register } = useForm();

  return (
    <>
      {show && (
        <>
          <div className="mt-10 flex flex-col w-full h-full top-16 text-primary-gray text-left text-base font-normal leading-5 tracking-normal text-gray-500">
            {!error && <TextWelcome />}
            {error && <TextOps />}
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 flex flex-col gap-y-5"
          >
            <InputLabel
              label="E-mail or Username"
              placeholder="user@e-mail.com"
              name="email"
              error={!!error}
              register={register}
            />

            <InputLabel
              type="password"
              label="Password"
              placeholder="*********"
              name="password"
              error={!!error}
              register={register}
            />

            <div
              onClick={() => setForgot(true)}
              className="flex justify-end text-base w-full cursor-pointer"
            >
              <span className="underline text-[#DD052B] pr-1">Forgot</span>
              your password?
            </div>

            <div className="w-full flex justify-end">
              <div className="w-1/3 flex flex-col">
                <button className="mt-[1rem] w-full h-[7rem] rounded-2xl bg-red-600 grid place-content-center">
                  <IconCheck width={50} height={50} />
                </button>

                <div className="mt-4 w-full h-1/4 flex flex-rol gap-x-1 text-center text-red-600 font-bold italic">
                  <span className="w-[64px]">
                    {!!error && <>wrong login</>}
                  </span>
                  <span className="w-[64px]">{!!error && <>fail login</>}</span>
                </div>
              </div>
            </div>
          </form>
        </>
      )}
    </>
  );
}
