import Avatar from "../assets/avatar1.png";

const CardOne = () => {
  return (
    <article className="bg-[#733FC8] rounded-[8px] p-[30px] flex flex-col gap-[20px] w-[540px] h-[342px]">
      <div className="flex gap-2 items-center">
        <img src={Avatar} className="size-[28px]" />
        <div>
          <h2 className="text-white text-[13px]">Daniel Clifford</h2>
          <h3 className="text-white/50 text-[11px]">Verified Graduate</h3>
        </div>
      </div>
      <h1 className="text-[20px] text-white font-bsc font-semibold">
        I received a job offer mid-course, and the subjects I learned were
        current, if not more so, in the company I joined. I honestly feel I got
        every penny’s worth.
      </h1>
      <p className="text-[#CFCFCF] text-[13px] leading-[18px]">
        “ I was an EMT for many years before I joined the bootcamp. I’ve been
        looking to make a transition and have heard some people who had an
        amazing experience here. I signed up for the free intro course and found
        it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was
        the best - and most grueling - time of my life. Since completing the
        course, I’ve successfully switched careers, working as a Software
        Engineer at a VR startup. ”
      </p>
    </article>
  );
};

export default CardOne;
