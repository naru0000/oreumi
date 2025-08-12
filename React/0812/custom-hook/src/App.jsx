import { useMouseLocation } from "./Hooks/useMouseLocation";
import { useScroll } from "./Hooks/useScroll";

function App() {
  const mouseLocation = useMouseLocation({ x: 0, y: 0 });
  // console.log(mouseLocation);
  const scroll = useScroll();
  console.log(scroll);

  return <div style={{ backgroundColor: "blue", height: "1000px" }}></div>;
}

export default App;
