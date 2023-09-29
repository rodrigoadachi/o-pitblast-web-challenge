"use client";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "@/query/user";
import { useEffect, useState } from "react";
import { ModalWelcome } from "../Components/Modal/Welcome";
import { CardWelcome } from "../Components/Protected/CardWelcome";
import { CardData } from "../Components/Protected/CardData";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/auth";

export default function Home() {
  const { push } = useRouter();
  const { user, setMenuShow } = useAuth();
  const [modalShow, setModalShow] = useState<boolean>(true);
  const { data, loading, error } = useQuery(QUERY_USER, {
    variables: {
      userId: user?.userId,
    },
    errorPolicy: "all",
  });

  useEffect(() => {
    setMenuShow(!modalShow);
  }, [modalShow, setMenuShow]);

  return (
    <>
      {modalShow && (
        <ModalWelcome
          label={`${data?.user?.firstName} ${data?.user?.lastName}`}
          onClose={() => setModalShow(false)}
        />
      )}
      {!modalShow && (
        <div className="p-10 flex flex-col gap-y-10">
          <CardWelcome
            name={`${data?.user?.firstName} ${data?.user?.lastName}`}
            companyName={data?.user?.companyName}
          />
          <CardData user={data?.user} />
        </div>
      )}
    </>
  );
}
