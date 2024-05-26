import React, { useEffect, useState } from "react";

export const Timer = () => {
  const [min, setMin] = useState(90);
  const [sec, setSec] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (sec > 0) setSec(sec - 1);
      else if (min > 0) {
        setMin(min - 1);
        setSec(59);
      } else {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [min, sec]);
  return (
    <div className="text-4xl  right-2 bottom-52 flex gap-2 text-white fixed">
      <h1>{min} mins</h1>
      <h1>{sec} secs</h1>
    </div>
  );
};
