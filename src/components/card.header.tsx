import { twMerge } from "tailwind-merge";

type PropsType = {
  avatar: string;
  name: {
    title: string;
    className?: string;
  };
  role: {
    title: string;
    className?: string;
  };
};

const CardHeader = ({ avatar, name, role }: PropsType) => {
  return (
    <div className="flex gap-2 items-center">
      <img src={avatar} className="size-[28px]" />
      <div>
        <h2 className={twMerge("text-white text-[13px]", name.className)}>
          {name.title}
        </h2>
        <h3 className={twMerge("text-white/50 text-[11px]", role.className)}>
          {role.title}
        </h3>
      </div>
    </div>
  );
};

export default CardHeader;
