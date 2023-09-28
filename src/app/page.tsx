"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();

  push("/protected");
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      Redirecting...
    </div>
  );
}
