import CardContainer from "../components/card.container";
import Avatar from "../assets/avatar2.png";
import CardHeader from "../components/card.header";
import CardTitle from "../components/card.title";
import CardParagraph from "../components/card.paragraph";
import CardCenter from "../components/card.center";

const CardFive = () => {
  return (
    <CardContainer
      className={`w-full lg:w-[540px] h-fit lg:h-[266px] bg-[#19202D]`}
    >
      <CardCenter>
        <CardHeader
          avatar={Avatar}
          name={{ title: "Patrick Abrams" }}
          role={{ title: "Verified Graduate" }}
        />
        <CardTitle>
          Awesome teaching support from TAs who did the bootcamp themselves.
          Getting guidance from them and learning from their experiences was
          easy.
        </CardTitle>
        <CardParagraph>
          “ The staff seem genuinely concerned about my progress which I find
          really refreshing. The program gave me the confidence necessary to be
          able to go out in the world and present myself as a capable junior
          developer. The standard is above the rest. You will get the personal
          attention you need from an incredible community of lgart and amazing
          people. ”
        </CardParagraph>
      </CardCenter>
    </CardContainer>
  );
};

export default CardFive;
