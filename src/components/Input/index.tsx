import clsx from "clsx";
import React from "react";
import hidePasswordIcon from "../../assets/eye.svg";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  className?: string;
  register?: any;
  errors?: any;
  inputType?: any;
  handleChangePasswordView?: () => void;
}

const Input = ({
  name,
  label,
  className,
  register,
  errors,
  inputType,
  handleChangePasswordView,
  ...rest
}: InputFieldProps) => {
  return (
    <div className="my-2 relative">
      <label
        htmlFor={name}
        className={clsx("block mb-2 text-md font-normal text-gray-900")}
      >
        {label}
      </label>
      <input
        {...register(name)}
        id={name}
        className={clsx(
          "bg-white border text-gray-900 focus:outline-none  text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-4",
          className,

          errors[name] ? "border-rose-400" : "border-gray-300"
        )}
        {...rest}
      />
      {inputType === "password" ? (
        <img
          className="absolute top-12 cursor-pointer right-5 z-10"
          src={hidePasswordIcon}
          alt="hide/show password"
          onClick={handleChangePasswordView}
        />
      ) : null}
      {errors[name] ? (
        <p className="text-rose-400 text-xs italic">{errors[name].message}</p>
      ) : null}
    </div>
  );
};

export default Input;
