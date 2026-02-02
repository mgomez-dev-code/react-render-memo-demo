import { useState } from "react";
import ItemList from "./components/ItemList";
import { useCallback } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleItemClick = useCallback((name: string) => {
    console.log("Clicked:", name);
  }, []);

  return (
    <div className="app">
      <h1 className="title">Render Behavior Demo</h1>

      <div className="controls">
        <button onClick={() => setCount(count + 1)}>
          Increment Count: {count}
        </button>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
      </div>

      <ItemList onItemClick={handleItemClick} />
    </div>
  );
};

export default App;
