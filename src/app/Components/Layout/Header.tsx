"use client";
import Image from "next/image";
import iLinks from "@/app/types/links";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loading from "./Loading";
import { useAuth } from "@/app/context/auth";

const links: iLinks[] = [
  {
    title: "Home",
    href: "/protected",
  },
  {
    title: "Log Out",
    href: "/login",
  },
];

export default function Header() {
  const { menuShow } = useAuth();
  const { push } = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleLink = async (url: string, target?: string) => {
    setLoading(true);
    if (target === "_blank") window.open(url, "_blank");
    else await push(url);
    setLoading(false);
  };
  return (
    <>
      {menuShow && (
        <header className="grid content-center justify-items-center h-[64px] bg-white z-20 w-full fixed">
          <div className="flex items-center justify-between w-[69vw] h-[100%]">
            {/* Logo */}
            <Image
              className="cursor-pointer mx-2"
              src="/layout/logo.png"
              quality={80}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "8%", height: "auto" }}
              alt={""}
              onClick={() => handleLink("/protected")}
            />
            {/* Menu */}
            <div className="flex flex-row gap-x-2">
              {links.map((link, key) => (
                <div
                  key={key}
                  className="
                    bg-gray-100 hover:bg-white
                    text-black hover:text-black
                    font-bold text-xl text-center
                    hover:rounded-xl
                    hover:shadow-lg
                    cursor-pointer
                    px-4 h-[100%]
                    hidden lg:block
                  "
                  style={{ gridColumn: key + 1 }}
                  onClick={() => handleLink(link?.href, link?.target)}
                >
                  <span className="grid content-center justify-items-center h-full font-sans">
                    {link?.title}
                  </span>
                </div>
              ))}
            </div>
            <div></div>
          </div>
          <Loading enable={loading} />
        </header>
      )}
    </>
  );
}
