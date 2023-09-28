export const CardWelcome = ({
  name,
  companyName,
}: {
  name?: string;
  companyName?: string;
}) => {
  return (
    <div className="rounded-3xl bg-white hover:bg-gray-100 w-full shadow-xl ackdrop-blur-md backdrop-filter backdrop-blur-8 flex flex-row items-center justify-between p-[24px]">
      <span>
        Welcome <span className="font-bold">{name}</span>
      </span>
      <span className="font-bold">{companyName}</span>
    </div>
  );
};
