import { MouseEventHandler } from "react";

interface iIcon {
  color?: string;
  size?: number;
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}
export default function IconProfile({
  color,
  size,
  className,
  onClick,
}: iIcon) {
  return (
    <svg
      className={className ? className : "text-white"}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      onClick={onClick}
      fill="none"
    >
      <g clipPath="url(#clip0_429_11217)">
        <path
          d="M4 18C4 15.7908 5.79086 14 8 14H16C18.2091 14 20 15.7908 20 18V18C20 19.1045 19.1046 20 18 20H6C4.89543 20 4 19.1045 4 18V18Z"
          stroke={color || "#828282"}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="6.99997"
          r="3"
          stroke={color || "#828282"}
          strokeWidth="2.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_429_11217">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
