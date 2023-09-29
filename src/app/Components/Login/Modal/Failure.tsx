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
    <>
      {show && (
        <div
          onClick={onClick}
          className="flex flex-col gap-y-[35px] items-center justify-center cursor-pointer"
        >
          <CardExclamation />
          <TextFailure message={`[${failure || forgotError}`} />
        </div>
      )}
    </>
  );
}
