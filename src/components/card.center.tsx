import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

const CardCenter = ({ children }: PropsType) => {
  return (
    <div className="flex flex-col gap-[10px] relative z-20">{children}</div>
  );
};

export default CardCenter;
