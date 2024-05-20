import React, { useEffect, useState } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState(90);
  useEffect(() => {
    setTimeout(() => {
      setTimer(timer - 1);
    }, 1000 * 60);
  });
  return <div className="text-4xl  right-2 bottom-52 flex gap-2 text-white fixed"><h1>Time Left: </h1>{timer} <h1>mins</h1></div>;
};
