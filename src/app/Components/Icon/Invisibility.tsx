import { MouseEventHandler } from "react";

interface iIcon {
  color?: string | undefined;
  size?: number;
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}
export default function IconInvisibility({
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
      <path
        d="M 3.8265434,11.46148 C 3.8265434,11.46148 5.6,15 12,15 m 0,0 c 6.4,0 7.769696,-3.53729 7.769696,-3.53729"
        stroke={color || "#828282"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
