import Content from "./components/Content";
import Recent from "./components/Recent";
import TopBar from "./components/TopBar";



function App() {
  return (
    <div className="w-full flex flex-col items-center">
      <TopBar />
      <h1 className="text-6xl font-bold my-4">Kapybara Token IDO</h1>
      <Content />
      <div className="w-[1000px] flex flex-col items-center">
        <Recent />
      </div>
    </div>
  );
}

export default App;
