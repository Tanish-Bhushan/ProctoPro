import React, { useState, useEffect } from "react";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const InvigilatorDashboard = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/getQuestions");
      setQuestions(res.data.message);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div>
      <div className="h-[40vh] font-[Poppins]  bg-welcomebg bg-cover bg-center text-white/90 shadow-lg">
        <div className="bg-black/50 h-full">
          <div
            className="p-4 flex justify-end text-red-500 font-bold text-xl cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Logout
          </div>

          <h1 className="flex justify-center items-center text-5xl m-4">
            Welcome
          </h1>
          <div className="flex justify-center p-10">
            <div className=" flex justify-around p-5 text-2xl bg-black w-[80%]">
              <button
                onClick={() => {
                  navigate("/createExam");
                }}
              >
                Create Exam
              </button>
              <button>Evaluate</button>
              <button>Monitor</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="h-[10vh]font-[Poppins] flex justify-center items-center text-xl m-5">
          Available exams
        </div>
        <div>
          {questions.length === 0 ? (
            <h1>No Active Exams</h1>
          ) : (
            questions.map((question) => (
              <div className="flex m-4 justify-between border p-2 rounded-md cursor-pointer">
                <h1>Id: {question.examId}</h1>
                <h1>Institute: {question.institute}</h1>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
