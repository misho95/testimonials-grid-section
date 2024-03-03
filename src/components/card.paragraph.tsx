import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type PropsType = {
  children: ReactNode;
  className?: string;
};

const CardParagraph = ({ children, className }: PropsType) => {
  return (
    <p
      className={twMerge(
        "text-[#CFCFCF] text-[13px] leading-[18px]",
        className
      )}
    >
      {children}
    </p>
  );
};

export default CardParagraph;
