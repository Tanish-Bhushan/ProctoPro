import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AddQuestion = ({ id, institute }) => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [op1, setOp1] = useState("");
  const [op2, setOp2] = useState("");
  const [op3, setOp3] = useState("");
  const [op4, setOp4] = useState("");
  const [answer, setAnswer] = useState("");

  const addQuestion = () => {
    const arr = [question, op1, op2, op3, op4, answer];
    const narr = [...questions, arr];
    setQuestions(narr);
    alert("Question added Successfully");
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/addQuestions", {
        questions: questions,
        id: id,
      });
      alert("Exam Created Successfully");
    } catch (e) {
      alert(e);
    }

    navigate("/invigilatorDashboard");
  };

  return (
    <div className="font-[Poppins] h-[100vh]  ">
      <div className="bg-black/50 pt-[5%] h-[100vh]">
        <div className="flex justify-around text-3xl text-white">
          <h1>Id: {id}</h1>
          <h1>Institute: {institute}</h1>
        </div>
        <div>
          <h1 className="text-3xl flex justify-center p-5">Add questions</h1>
        </div>
        <div>
          <div className="flex justify-between p-4">
            <label>Enter Question</label>
            <input
              type="text"
              className="border border-black w-[90%]"
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <div className="flex justify-between p-4">
            <label>Option 1</label>
            <input
              type="text"
              className="border border-black w-[90%]"
              onChange={(e) => setOp1(e.target.value)}
            />
          </div>
          <div className="flex justify-between p-4">
            <label>Option 2</label>
            <input
              type="text"
              className="border border-black w-[90%]"
              onChange={(e) => setOp2(e.target.value)}
            />
          </div>
          <div className="flex justify-between p-4">
            <label>Option 3</label>
            <input
              type="text"
              className="border border-black w-[90%]"
              onChange={(e) => setOp3(e.target.value)}
            />
          </div>
          <div className="flex justify-between p-4">
            <label>Option 4</label>
            <input
              type="text"
              className="border border-black w-[90%]"
              onChange={(e) => setOp4(e.target.value)}
            />
          </div>
          <div className="flex justify-between p-4">
            <label>Answer</label>
            <input
              type="text"
              className="border border-black w-[90%]"
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
          <div className="flex justify-end p-4">
            <button
              type="submit"
              className=" p-2 bg-green-500 text-white"
              onClick={addQuestion}
            >
              Add
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-yellow-300 p-2 rounded-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
