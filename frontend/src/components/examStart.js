import React, { useState } from "react";
import { Camera } from "../camera";
import { useNavigate } from "react-router-dom";
import { Timer } from "./timer";
import { Question } from "./questions";


export const ExamStart = ({ questions }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    alert("Exam Submitted");
    navigate("/");
  };

  return (
    <div className="flex">
      <div>
        <div className="w-[80vw] ">
          {questions.map((q) => (
            <Question question={q} />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button
            className=" border p-2 rounded-md bg-green-500 m-2"
            onClick={handleSubmit}
          >
            Submit Exam
          </button>
        </div>
      </div>

      <div className="float-right">
        <div className=" p-4 w-[20vw] h-[100vh] fixed bg-black/80">
          <Camera />
        </div>
      </div>
      <Timer />
    </div>
  );
};
