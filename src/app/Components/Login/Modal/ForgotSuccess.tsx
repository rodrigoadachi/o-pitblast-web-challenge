import { MouseEventHandler } from "react";
import { TextSend } from "../TextSend";
import IconCheck from "../../Icon/Check";

type props = {
  show: boolean;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
};
export default function ModalSuccess({ show, onClick }: props) {
  return (
    <div className="w-full h-full mt-[2rem]">
      {show && (
        <div className="h-full w-full flex flex-col gap-4 justify-center items-center content-center">
          <TextSend />

          <div className="w-full flex justify-end">
            <button
              onClick={onClick}
              className="w-[8rem] h-[8rem] rounded-2xl bg-red-600 grid place-content-center"
            >
              <IconCheck width={80} height={80} className="w-200" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
