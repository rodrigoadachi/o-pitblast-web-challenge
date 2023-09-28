import { FieldValues, UseFormRegister } from "react-hook-form";
import IconProfile from "../Icon/Profile";
import IconLock from "../Icon/Lock";
import IconVisibility from "../Icon/Visibility";
import { useState } from "react";
import IconInvisibility from "../Icon/Invisibility";

interface iInput {
  label?: string | null;
  type?: string | "text";
  placeholder?: string | "";
  required?: boolean;
  className?: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  error?: boolean;
}
export const InputLabel = ({
  label,
  type,
  placeholder,
  required,
  className,
  register,
  name,
  error,
  ...rest
}: iInput) => {
  const [visibility, setVisibility] = useState<boolean>(false);
  return (
    <div className={`grid grid-flow-row pt-[16px] ${className}`}>
      <label
        className={`ml-4 mb-[7px] block text-left font-normal text-base leading-5 font-gotham ${
          error ? "text-[#DD052B]" : "text-[#545454]"
        }`}
      >
        {label} {required && <span className="text-red pl-1">*</span>}
      </label>

      <div className="relative text-gray-400 focus-within:text-gray-600 w-[100%] bg-white">
        {(name === "username" || name === "email") && (
          <IconProfile
            color={error ? "#DD052B" : "#828282"}
            className="absolute inset-y-0 left-0 flex items-center mx-[16px] top-1/2 transform -translate-y-1/2"
          />
        )}
        {name === "password" && (
          <IconLock
            color={error ? "#DD052B" : "#828282"}
            className="absolute inset-y-0 left-0 flex items-center mx-[16px] top-1/2 transform -translate-y-1/2"
          />
        )}
        <input
          type={name !== "password" ? type : visibility ? "text" : "password"}
          placeholder={placeholder}
          className={`
            w-[100%] h-[52px]
            rounded-md
            text-sm pl-11 p-4
            bg-white
            ${error ? "border-[#DD052B] border-4" : "border-2 border-gray-300"}
          `}
          {...register(name)}
          {...rest}
        />
        {name === "password" && !visibility && (
          <IconInvisibility
            onClick={() => setVisibility(!visibility)}
            className="absolute inset-y-0 right-0 flex items-center mx-[16px] top-1/2 transform -translate-y-1/2 cursor-pointer"
          />
        )}
        {name === "password" && visibility && (
          <IconVisibility
            onClick={() => setVisibility(!visibility)}
            className="absolute inset-y-0 right-0 flex items-center mx-[16px] top-1/2 transform -translate-y-1/2 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};
