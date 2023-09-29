export const TextFailure = ({ message }: { message?: string }) => {
  return (
    <div className=" flex flex-col w-full text-left font-normal text-[24px] leading-[34px] font-minion-pro text-primary-gray text-[#828282]">
      <span className="text-primary-dark text-left font-bold text-2xl leading-7 font-gotham text-gray-700 mb-2">
        Ops!
      </span>
      <span>It was not possible to connect to your account. Try again.</span>
      <span>{message}</span>
    </div>
  );
};
