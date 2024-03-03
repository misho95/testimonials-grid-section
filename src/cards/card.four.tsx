import CardContainer from "../components/card.container";
import Avatar from "../assets/avatar4.png";
import CardHeader from "../components/card.header";
import CardTitle from "../components/card.title";
import CardParagraph from "../components/card.paragraph";
import CardCenter from "../components/card.center";

const CardFour = () => {
  return (
    <CardContainer
      className={`w-full lg:w-[255px] h-fit lg:h-[266px] bg-[#FFFFFF]`}
    >
      <CardCenter>
        <CardHeader
          avatar={Avatar}
          name={{ title: "Jeanette Harmon", className: "text-[#48556A]" }}
          role={{ title: "Verified Graduate", className: "text-[#48556A]/50" }}
        />
        <CardTitle className="text-[#48556A]">
          An overall wonderful and rewarding experience
        </CardTitle>
        <CardParagraph className="text-[#48556A]/70">
          “ Thank you for the wonderful experience! I now have a job I really
          enjoy, and make a good living while doing something I love. ”
        </CardParagraph>
      </CardCenter>
    </CardContainer>
  );
};

export default CardFour;
