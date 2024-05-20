import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddQuestion } from "./addQuestion";
import axios from "axios";

export const CreateExams = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(1);
  const [institute, setInstitute] = useState("");
  const [id, setId] = useState();

  const handleSubmit = async () => {
    setClick(0);
    try {
      const res = await axios.post("http://127.0.0.1:8000/createExam", {
        institute: institute,
      });
      setId(res.data.message);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className=" bg-createExambg bg-cover">
      {click ? (
        <div className="flex flex-col justify-center p-4 items-center h-[100vh] gap-5 font-[Poppins]">
          <label className="text-3xl">Enter Institute Name</label>
          <input
            type="text"
            className="border border-black w-[20%]"
            placeholder={institute}
            onChange={(e) => {
              setInstitute(e.target.value);
            }}
          />
          <button
            type="submit"
            className="bg-yellow-400 rounded-sm p-2 text-xl"
            onClick={handleSubmit}
          >
            Proceed
          </button>
        </div>
      ) : (
        <AddQuestion id={id} institute={institute} />
      )}
    </div>
  );
};
