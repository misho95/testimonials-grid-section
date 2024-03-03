import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type PropsType = {
  children: ReactNode;
  className: string;
};

const CardContainer = ({ className, children }: PropsType) => {
  return (
    <article
      className={twMerge(`rounded-[8px] p-[30px] relative font-bsc`, className)}
    >
      {children}
    </article>
  );
};

export default CardContainer;
