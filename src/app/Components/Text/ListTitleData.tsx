export const ListTitleData = ({
  title,
  data,
}: {
  title?: string;
  data?: string;
}) => {
  return (
    <div className="flex flex-col w-full truncate">
      <span className="text-[#828282] w-1/2 ">{title}</span>
      <span className="font-bold ml-4 text-black">{data}</span>
    </div>
  );
};
