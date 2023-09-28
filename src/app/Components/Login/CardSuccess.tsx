import IconCheck from "../Icon/Check";

export default function CardSuccess() {
  return (
    <div className="mb-[322px] border rounded-xl bg-[#05DD2B] w-[136px] h-[168px] flex flex-col items-center justify-center gap-y-2">
      <IconCheck width={80} height={80} />
      <span className="text-center font-medium text-white text-opacity-100 text-lg leading-6 tracking-normal">
        Success!
      </span>
    </div>
  );
}
