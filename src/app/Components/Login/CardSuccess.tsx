import IconCheck from "../Icon/Check";

type props = {
  show: boolean;
};
export default function CardSuccess({ show }: props) {
  return (
    <>
      {show && (
        <div className="h-full w-full flex justify-center items-center content-center">
          <div className="mb-[322px] border rounded-xl bg-[#05DD2B] w-[8rem] h-[8rem] flex flex-col items-center justify-center gap-y-2">
            <IconCheck width={80} height={80} />
            <span className="text-center font-medium text-white text-opacity-100 text-lg leading-6 tracking-normal">
              Success!
            </span>
          </div>
        </div>
      )}
    </>
  );
}
