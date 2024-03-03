import CardContainer from "../components/card.container";
import Avatar from "../assets/avatar2.png";
import CardHeader from "../components/card.header";
import CardTitle from "../components/card.title";
import CardParagraph from "../components/card.paragraph";
import CardCenter from "../components/card.center";

const CardTwo = () => {
  return (
    <CardContainer
      className={`w-full lg:w-[255px] h-fit lg:h-[282px] bg-[#48556A]`}
    >
      <CardCenter>
        <CardHeader
          avatar={Avatar}
          name={{ title: "Jonathan Walters" }}
          role={{ title: "Verified Graduate" }}
        />
        <CardTitle>
          The team was very supportive and kept me motivated
        </CardTitle>
        <CardParagraph>
          “ I started as a total newbie with virtually no coding skills. I now
          work as a mobile engineer for a big company. This was one of the best
          investments I’ve made in myself. “
        </CardParagraph>
      </CardCenter>
    </CardContainer>
  );
};

export default CardTwo;
