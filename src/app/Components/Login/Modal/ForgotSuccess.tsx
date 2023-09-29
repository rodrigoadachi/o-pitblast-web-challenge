import {
  Dispatch,
  FormEventHandler,
  MouseEventHandler,
  SetStateAction,
} from "react";
import { TextSend } from "../TextSend";
import IconCheck from "../../Icon/Check";

type props = {
  show: boolean;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
};
export default function ModalSuccess({ show, onClick }: props) {
  return (
    <>
      {show && (
        <>
          <TextSend />

          <div className="w-[356px] flex justify-end mb-[80px]">
            <button
              onClick={onClick}
              className="mt-[52px] w-[136px] h-[136px] rounded-2xl bg-red-600 grid place-content-center"
            >
              <IconCheck width={80} height={80} className="w-200" />
            </button>
          </div>
        </>
      )}
    </>
  );
}
