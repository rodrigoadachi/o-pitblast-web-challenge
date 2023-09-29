import IconCircleExclamation from "../Icon/CircleExclamation";

export default function CardExclamation() {
  return (
    <div className="h-full w-full flex justify-center items-center content-center">
      <div className="border rounded-xl bg-[#FF6600] w-[8rem] h-[8rem] flex flex-col items-center justify-center gap-y-2">
        <IconCircleExclamation />
        <span className="text-center font-medium text-white text-opacity-100 text-lg leading-6 tracking-normal">
          Error!
        </span>
      </div>
    </div>
  );
}
