import Recent from "./components/Recent";
import TopBar from "./components/TopBar";



function App() {
  return (
    <div className="w-full flex flex-col items-center">
      <TopBar />
      <div className="w-[1000px] flex flex-col items-center">
        <Recent />
      </div>
    </div>
  );
}

export default App;
