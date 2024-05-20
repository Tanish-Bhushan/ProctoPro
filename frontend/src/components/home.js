import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-homebg h-[100vh] bg-cover bg-center  font-[Poppins]  text-white">
      <div className="bg-black/50 h-[100vh] w-[100vw] flex justify-center items-center flex-col">
        <div className="w-[50%] flex justify-center flex-col items-center">
          <h1 className="text-5xl">
            <span className="text-yellow-500 font-bold">Procto</span>Pro
          </h1>
          <h1 className="  text-xl m-5 p-2 overflow-hidden whitespace-nowrap border-r-4 border-r-white   text-white font-bold anim">
            Complete Proctoring Solutions
          </h1>
        </div>
        <button
          className="bg-black/80 p-4 rounded-lg"
          onClick={() => navigate("/login")}
        >
          Login to Start your Exams
        </button>
      </div>
    </div>
  );
};
