import CardFive from "./cards/card.five";
import CardFour from "./cards/card.four";
import CardOne from "./cards/card.one";
import CardThree from "./cards/card.three";
import CardTwo from "./cards/card.two";

const App = () => {
  return (
    <div className="flex w-full min-h-screen lg:h-screen justify-center items-center bg-[#F2F2F2] py-5 lg:py-0">
      <div className="grid grid-cols-1 lg:grid-cols-4 gird-rows-2 w-11/12 lg:w-[1110px] lg:h-[572px] gap-[30px] justify-center items-center">
        <div className="lg:col-span-2">
          <CardOne />
        </div>
        <div>
          <CardTwo />
        </div>
        <div className="lg:row-span-2">
          <CardThree />
        </div>
        <div>
          <CardFour />
        </div>
        <div className="lg:col-span-2">
          <CardFive />
        </div>
      </div>
    </div>
  );
};

export default App;
