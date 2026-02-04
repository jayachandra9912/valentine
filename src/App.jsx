import { useState } from "react";

export default function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: "60%", left: "55%" });

  const moveNoButton = () => {
    const top = Math.random() * 70 + 10;
    const left = Math.random() * 70 + 10;
    setNoPosition({ top: `${top}%`, left: `${left}%` });
  };

  if (yesClicked) {
    return (
      <div className="container">
        <h1>Yaaay 💖</h1>
        <p>You just made my heart very happy 🥰</p>
        <p>Happy Valentine’s Day 💕</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Will you be my Valentine? 💘</h1>

      <div className="buttons">
        <button className="yes" onClick={() => setYesClicked(true)}>
          Yes 💖
        </button>

        <button
          className="no"
          onMouseEnter={moveNoButton}
          style={{ top: noPosition.top, left: noPosition.left }}
        >
          No 😜
        </button>
      </div>
    </div>
  );
}
