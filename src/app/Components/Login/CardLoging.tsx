import IconCircle from "../Icon/Circle";

export default function CardLoging() {
  return (
    <div className="mb-[322px] border rounded-xl bg-[#DD052B] w-[136px] h-[168px] flex flex-col items-center justify-center gap-y-2">
      <IconCircle />
      <span className="text-center font-medium text-white text-opacity-100 text-lg leading-6 tracking-normal">
        Loging in...
      </span>
    </div>
  );
}
