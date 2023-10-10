import { useState } from "react";

export const Button = () => {
  const [loading, setLoading] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const startTimer = () => {
    setLoading(true);
  };
  const startTimer1 = () => {
    setLoading(true);
    setIsTimerRunning(true);
    setTimeout(() => {
      setIsTimerRunning(false);
      console.log("タイマーが終了しました！");
    }, 1000);
  };
  const startTimer2 = () => {
    setLoading(true);
    setIsTimerRunning(true);
    setTimeout(() => {
      setIsTimerRunning(false);
      console.log("タイマーが終了しました！");
    }, 2000);
  };
  const startTimer3 = () => {
    setLoading(true);
    setIsTimerRunning(true);
    setTimeout(() => {
      setIsTimerRunning(false);
      console.log("タイマーが終了しました！");
    }, 3000);
  };
  const startTimer4 = () => {
    setLoading(true);
    setIsTimerRunning(true);
    setTimeout(() => {
      setIsTimerRunning(false);
      console.log("タイマーが終了しました！");
    }, 4000);
  };

  return (
    <>
      <button
        className=" rounded-full border px-4 py-2 text-skin-base hover:bg-skin-accent"
        onClick={startTimer}
        disabled={isTimerRunning}
      >
        {isTimerRunning ? "loading" : " 遅延なし"}
      </button>
      <button
        className=" rounded-full border px-4 py-2 text-skin-base hover:bg-skin-accent"
        onClick={startTimer1}
        disabled={isTimerRunning}
      >
        {isTimerRunning ? "loading" : " 1秒遅延"}
      </button>
      <button
        className=" rounded-full border px-4 py-2 text-skin-base hover:bg-skin-accent"
        onClick={startTimer2}
        disabled={isTimerRunning}
      >
        {isTimerRunning ? "loading" : " 2秒遅延"}
      </button>
      <button
        className=" rounded-full border px-4 py-2 text-skin-base hover:bg-skin-accent"
        onClick={startTimer3}
        disabled={isTimerRunning}
      >
        {isTimerRunning ? "loading" : " 3秒遅延"}
      </button>
      <button
        className=" rounded-full border px-4 py-2 text-skin-base hover:bg-skin-accent"
        onClick={startTimer4}
        disabled={isTimerRunning}
      >
        {isTimerRunning ? "loading" : " 4秒遅延"}
      </button>
      <div>
        {loading ? (
          <div className=" mx-4 my-2 text-lg text-skin-base">
            {isTimerRunning ? "loading..." : "🐣🐣🐣🐣"}
          </div>
        ) : (
          <div className=" mx-4 my-2 text-lg text-skin-base">非表示</div>
        )}
      </div>
    </>
  );
};
