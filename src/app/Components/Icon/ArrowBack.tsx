import { MouseEventHandler } from "react";

interface iIcon {
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}
export default function IconArrowBack({
  color,
  width,
  height,
  className,
  onClick,
}: iIcon) {
  return (
    <svg
      className={className ? className : "text-white"}
      xmlns="http://www.w3.org/2000/svg"
      width={width || 20}
      height={height || 20}
      viewBox="0 0 24 24"
      onClick={onClick}
      fill="none"
    >
      <path
        d="M11 6L5 12M5 12L11 18M5 12H19"
        stroke="#828282"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
