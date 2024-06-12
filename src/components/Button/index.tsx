import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "p-4 flex justify-center items-center rounded-lg bg-primary px-4 text-sm font-medium text-white transition-colors hover:bg-amber-300 hover:border-dashed hover:text-black",
        className
      )}
    >
      {children}
    </button>
  );
}