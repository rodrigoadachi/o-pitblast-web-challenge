import IconCircle from "../Icon/Circle";

type props = {
  show: boolean;
};
export default function CardLoging({ show }: props) {
  return (
    <>
      {show && (
        <div className="h-full w-full flex justify-center items-center content-center">
          <div className="border rounded-xl bg-[#DD052B] w-[8rem] h-[8rem] flex flex-col items-center justify-center gap-y-2">
            <IconCircle />
            <span className="text-center font-medium text-white text-opacity-100 text-lg leading-6 tracking-normal">
              Loging in...
            </span>
          </div>
        </div>
      )}
    </>
  );
}
