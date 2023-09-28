import { MouseEventHandler, useState } from "react";
import Logo from "../Login/Logo";
import IconArrowBack from "../Icon/ArrowBack";

interface iInput {
  label?: string | null;
  onClose: MouseEventHandler<HTMLButtonElement>;
}

export const ModalWelcome = ({ label, onClose, ...rest }: iInput) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-static bg-cover bg-center bg-fixed">
      <div className="rounded-3xl bg-white w-[932px] h-[932px] shadow-xl ackdrop-blur-md backdrop-filter backdrop-blur-8 flex flex-col items-center justify-between p-[24px]">
        <Logo width={665} />
        <span className="text-primary-dark text-center font-bold text-[32px] leading-30 tracking-normal text-gray-700 opacity-100">
          Welcome to Admin 2.0
        </span>
        <div className="flex justify-start w-[100%]">
          <button
            onClick={onClose}
            className="w-[136px] h-[136px] cursor-pointer flex items-center justify-center"
          >
            <IconArrowBack width={84} height={84} />
          </button>
        </div>
      </div>
    </div>
  );
};
