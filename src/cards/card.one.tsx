import Avatar from "../assets/avatar1.png";
import Icon from "../assets/icon.png";
import CardCenter from "../components/card.center";
import CardContainer from "../components/card.container";
import CardHeader from "../components/card.header";
import CardParagraph from "../components/card.paragraph";
import CardTitle from "../components/card.title";

const CardOne = () => {
  return (
    <CardContainer
      className={"bg-[#733FC8] w-full lg:w-[540px] h-fit lg:h-[282px]"}
    >
      <img src={Icon} className="absolute right-[80px] top-0" />
      <CardCenter>
        <CardHeader
          avatar={Avatar}
          name={{
            title: "Daniel Clifford",
          }}
          role={{ title: "Verified Graduate" }}
        />
        <CardTitle>
          I received a job offer mid-course, and the subjects I learned were
          current, if not more so, in the company I joined. I honestly feel I
          got every penny’s worth.
        </CardTitle>
        <CardParagraph>
          “ I was an EMT for many years before I joined the bootcamp. I’ve been
          looking to make a transition and have heard some people who had an
          amazing experience here. I signed up for the free intro course and
          found it incredibly fun! I enrolled shortly thereafter. The next 12
          weeks was the best - and most grueling - time of my life. Since
          completing the course, I’ve successfully switched careers, working as
          a Software Engineer at a VR startup. ”
        </CardParagraph>
      </CardCenter>
    </CardContainer>
  );
};

export default CardOne;
