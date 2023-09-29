import { MouseEventHandler } from "react";
import CardExclamation from "../CardExclamation";
import { TextFailure } from "../TextFailure";

type props = {
  show: boolean;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
  failure: string | undefined;
  forgotError: string | null;
};
export default function ModalFailure({
  show,
  onClick,
  failure,
  forgotError,
}: props) {
  return (
    <div className="w-full h-full">
      {show && (
        <div
          onClick={onClick}
          className="h-full w-full flex flex-col gap-4 justify-center items-center content-center cursor-pointer"
        >
          <CardExclamation />
          <TextFailure message={`[${failure || forgotError}]`} />
        </div>
      )}
    </div>
  );
}
