import { useState } from "react";

export default function ToggleMessage() {
  const [showMessage, setShowMessage] = useState(false);
  const [showList, setShowList] = useState(true);
  const [input, setInput] = useState("");
  const [names, setNames] = useState([]);

  function addName() {
    if (!input.trim()) return;
    setNames([...names, input]);
    setInput("");
  }

  return (
    <div>
      {/* Toggle message */}
      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle Message
      </button>

      {showMessage && <p>Hello! This is a message.</p>}

      {/* Input + add */}
      <input
        type="text"
        placeholder="Alex"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addName}>Add Name</button>

      {/* Toggle list */}
      <button onClick={() => setShowList(!showList)}>
        {showList ? "Hide List" : "Show List"}
      </button>

      {/* Render list */}
      {showList ? (
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
