import React, { useState, useEffect } from "react";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ExamStart } from "./examStart";

export const StudentDashBoard = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [start, setStart] = useState(0);
  const [question, setQuestion] = useState("");

  const handleSubmit = (q) => {
    setStart(1);
    setQuestion(q.questions);
    
  };

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
      {start === 0 ? (
        <div>
          <div className="h-[40vh] font-[Poppins]  bg-welcomebg bg-cover bg-center text-white/90 shadow-lg">
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
                  <div
                    className="flex m-4 justify-between border p-2 rounded-md cursor-pointer"
                    onClick={() => handleSubmit(question)}
                  >
                    <h1>Id: {question.examId}</h1>
                    <h1>Institute: {question.institute}</h1>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      ) : (
        <ExamStart questions={question} />
      )}
    </div>
  );
};
