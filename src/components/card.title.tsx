import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type PropsType = {
  children: ReactNode;
  className?: string;
};

const CardTitle = ({ children, className }: PropsType) => {
  return (
    <h1 className={twMerge("text-[20px] text-white  font-semibold", className)}>
      {children}
    </h1>
  );
};

export default CardTitle;
