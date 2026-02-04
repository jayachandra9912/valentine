import { useEffect, useState } from "react";

export default function Valentine() {
  const [yes, setYes] = useState(false);
  const [pos, setPos] = useState({ top: "60%", left: "55%" });

  useEffect(() => {
    const audio = new Audio("/valentine.mp3");
    audio.loop = true;
    audio.volume = 0.6;
    audio.play().catch(() => {});
  }, []);

  const moveNo = () => {
    setPos({
      top: `${Math.random() * 70 + 10}%`,
      left: `${Math.random() * 70 + 10}%`,
    });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 to-rose-500 overflow-hidden">
      {!yes ? (
        <div className="relative bg-white rounded-3xl shadow-2xl p-10 text-center w-[90%] max-w-md">
          <h1 className="text-3xl font-bold text-pink-600 mb-2">
            Chandu 💖
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Will you be my Valentine? 💘
          </p>

          <div className="relative h-40">
            <button
              onClick={() => setYes(true)}
              className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-lg font-semibold transition transform hover:scale-110"
            >
              Yes 💕
            </button>

            <button
              onMouseEnter={moveNo}
              style={pos}
              className="absolute px-6 py-3 bg-gray-100 text-pink-600 rounded-full text-lg font-semibold animate-shake"
            >
              No 😈
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl shadow-2xl p-10 text-center animate-bounce">
          <h1 className="text-4xl font-bold text-pink-600 mb-4">
            YAYYYY 🥰
          </h1>
          <p className="text-xl text-gray-700">
            I knew you’d say YES, Chandu 💖
          </p>
          <p className="mt-2 text-lg text-pink-500">
            Happy Valentine’s Day 💘
          </p>
        </div>
      )}
    </div>
  );
}
