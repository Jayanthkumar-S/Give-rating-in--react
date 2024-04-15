import { useState } from "react";

function App({ maxValue = 5, messages = [], color = "#fcc419", size = 48 }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  return (
    <div className="App starsContainer">
      <div>
        {Array.from({ length: maxValue }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onClick={() => setRating(i + 1)}
            onMouseIn={() => setTempRating(i + 1)}
            onMouseOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <h2>
        {messages.length === maxValue
          ? messages[tempRating - 1] || messages[rating - 1] || " "
          : tempRating || rating || ""}
      </h2>
    </div>
  );
}
function Star({ onClick, onMouseIn, onMouseOut, full, color, size }) {
  const style = {
    cursor: "pointer",
  };
  const start = {
    width: "10px",
    gap: "2px",
    fontSize: `${size}px`,
    color: `${color}`,
  };
  return (
    <span
      role="button"
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseIn}
      onMouseLeave={onMouseOut}
    >
      {full ? <span style={start}>★</span> : <span style={start}>☆</span>}
    </span>
  );
}

export default App;
