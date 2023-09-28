import { MouseEventHandler } from "react";

interface iIcon {
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}
export default function IconCheck({
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
        d="M4 12.6111L8.92308 17.5L20 6.5"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
