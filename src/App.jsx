import Content from "./components/Content";
import Participate from "./components/Participate";
import Recent from "./components/Recent";
import TopBar from "./components/TopBar";



function App() {
  return (
    <div className="w-full flex flex-col items-center gap-5 mb-20">
      <TopBar />
      <h1 className="text-6xl font-bold my-4">Kapybara Token IDO</h1>
      <Content />
      <Participate />
      <div className="w-[1000px] flex flex-col items-center">
        <Recent />
      </div>
    </div>
  );
}

export default App;
