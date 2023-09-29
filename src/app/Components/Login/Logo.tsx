import Image from "next/image";
export default function Logo({ width }: { width?: number }) {
  return (
    <Image
      src="/layout/logo.png"
      alt="O-Pitblast"
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: width || "429px", height: "auto" }}
    />
  );
}
