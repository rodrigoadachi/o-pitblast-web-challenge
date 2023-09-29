import { iUser } from "@/app/types/user";
import { ListTitleData } from "../Text/ListTitleData";

export const CardData = ({ user }: { user?: iUser }) => {
  return (
    <div className="rounded-3xl bg-white hover:bg-gray-100 w-full md:w-1/4 shadow-xl backdrop-blur-md backdrop-filter backdrop-blur-8 flex flex-col items-start justify-start p-10">
      <ListTitleData title="First Name" data={user?.firstName} />
      <ListTitleData title="Last Name" data={user?.lastName} />
      <ListTitleData title="Email" data={user?.email} />
      <ListTitleData title="Company Name" data={user?.companyName} />
      <ListTitleData title="Company Position" data={user?.companyPosition} />
      <ListTitleData title="Status" data={user?.status} />
    </div>
  );
};
