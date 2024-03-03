import CardOne from "./components/card.one";

const App = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-[#F2F2F2]">
      <div className="grid grid-cols-4 gird-rows-2 w-[1110px] h-[572px] gap-5">
        <div className="col-span-2">
          <CardOne />
        </div>
        <div>2</div>
        <div className="row-span-2">3</div>
        <div>4</div>
        <div className="col-span-2">5</div>
      </div>
    </div>
  );
};

export default App;
