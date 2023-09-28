import { MouseEventHandler } from "react";

interface iIcon {
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}
export default function IconCircle({
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
      width={width || 100}
      height={height || 100}
      viewBox="0 0 24 24"
      onClick={onClick}
      fill="none"
      strokeWidth="2"
    >
      <path
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        stroke={color || "#ffffff"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
