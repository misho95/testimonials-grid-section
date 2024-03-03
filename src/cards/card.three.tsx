import CardContainer from "../components/card.container";
import Avatar from "../assets/avatar3.png";
import CardHeader from "../components/card.header";
import CardTitle from "../components/card.title";
import CardParagraph from "../components/card.paragraph";
import CardCenter from "../components/card.center";

const CardThree = () => {
  return (
    <CardContainer
      className={`w-full lg:w-[255px] h-fit lg:h-[572px] bg-[#FFFFFF]`}
    >
      <CardCenter>
        <CardHeader
          avatar={Avatar}
          name={{ title: "Kira Whittle", className: "text-[#48556A]" }}
          role={{ title: "Verified Graduate", className: "text-[#48556A]/50" }}
        />
        <CardTitle className="text-[#48556A]">
          Such a life-changing experience. Highly recommended!
        </CardTitle>
        <CardParagraph className="text-[#48556A]/70">
          “ Before joining the bootcamp, I’ve never written a line of code. I
          needed some structure from professionals who can help me learn
          programming step by step. I was encouraged to enroll by a former
          student of theirs who can only say wonderful things about the program.
          The entire curriculum and staff did not disappoint. They were very
          hands-on and I never had to wait long for assistance. The agile team
          project, in particular, was outstanding. It took my learning to the
          next level in a way that no tutorial could ever have. In fact, I’ve
          often referred to it during interviews as an example of my developent
          experience. It certainly helped me land a job as a full-stack
          developer after receiving multiple offers. 100% recommend! ”
        </CardParagraph>
      </CardCenter>
    </CardContainer>
  );
};

export default CardThree;
