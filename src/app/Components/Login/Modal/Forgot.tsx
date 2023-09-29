import { Dispatch, FormEventHandler, SetStateAction } from "react";
import { InputLabel } from "../../Form/InputLabel";
import { useForm } from "react-hook-form";
import IconSend from "../../Icon/Send";
import IconArrowBack from "../../Icon/ArrowBack";
import { TextToReset } from "../TextToReset";
import { iForgot } from "@/app/types/user";

type props = {
  show: boolean;
  error: string | undefined;
  onSubmit: (email: iForgot) => void;
  setForgot: Dispatch<SetStateAction<boolean>>;
};
export default function ModalForgot({
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
            <TextToReset />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 flex flex-col gap-y-5"
          >
            <InputLabel
              label="E-mail"
              placeholder="user@e-mail.com"
              name="email"
              error={!!error}
              register={register}
            />
            <div className="w-full flex justify-between items-end">
              <button
                onClick={() => setForgot(false)}
                className="w-1/3 h-[7rem] cursor-pointer"
              >
                <IconArrowBack width={84} height={84} />
              </button>
              <button className="w-1/3 h-[7rem] rounded-2xl bg-red-600 grid place-content-center cursor-pointer">
                <IconSend width={80} height={80} className="w-200" />
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
}
