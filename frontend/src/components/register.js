import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Institute, setInstitute] = useState("");
  const [role, setRole] = useState("Student");

  const navigate = useNavigate();
  const toLoginPage = () => {
    navigate("/login");
  };

  const handleSubmit = () => {
    if (role === "Student") submitDetailsforUser();
    else submitDetailsforInvigilator();
  };

  const submitDetailsforUser = async (e) => {
    
    try {
      const res = await axios.post("http://127.0.0.1:8000/studentRegister", {
        name: username,
        email: email,
        password: password,
        Institute: Institute,
      });
      if (res.data.message === "300") alert("Email already exists");
      else {
        alert("Student's Account created successfully");
        navigate("/login");
      }
    } catch (e) {
      alert(e);
    }
  };

  const submitDetailsforInvigilator = async (e) => {
   
    try {
      const res=await axios.post("http://127.0.0.1:8000/invigilatorRegister", {
        name: username,
        email: email,
        password: password,
        Institute: Institute,
      });
      if (res.data.message === "300") alert("Email already exists");
      else {
        alert("Invigilator's Account created successfully");
        navigate("/login");
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className=" h-[100vh]  overflow-hidden font-[Poppins] bg-hero bg-cover ">
      <div className="mt-[4%] ml-auto mr-auto w-[30%] items-center text-center bg-black/40 text-white rounded-lg p-4 shadow-lg">
        <h1 className="text-2xl mt-2">Create account</h1>
        <div className="flex justify-around m-4">
          <div>
            {role === "Student" ? (
              <button
                className=" border-b-4 border-yellow-500 w-[10vw] p-2 text-xl"
                onClick={() => {
                  setRole("Student");
                }}
              >
                Student
              </button>
            ) : (
              <button
                className="w-[10vw] p-2"
                onClick={() => {
                  setRole("Student");
                }}
              >
                Student
              </button>
            )}
          </div>
          {role === "Invigilator" ? (
            <button
              className=" border-b-4 border-yellow-500 w-[10vw] p-2 text-xl"
              onClick={() => {
                setRole("Invigilator");
              }}
            >
              Invigilator
            </button>
          ) : (
            <button
              className="w-[10vw] p-2"
              onClick={() => {
                setRole("Invigilator");
              }}
            >
              Invigilator
            </button>
          )}
        </div>
        <form action="" className="flex">
          <div className="w-full m-2 flex flex-col">
            <label className="mt-4 text-lg mr-auto">Name</label>
            <input
              type="text"
              className="mt-1 w-full h-10 text-lg border-2 rounded-lg text-black"
              onChange={(event) => setUsername(event.target.value)}
            />
            <label className="mt-4 text-lg mr-auto">Email</label>
            <input
              type="text"
              className="mt-1 w-full h-10 text-lg border-2 rounded-lg text-black"
              onChange={(event) => setEmail(event.target.value)}
            />
            <label className="mt-4 text-lg mr-auto">Institute</label>
            <input
              type="text"
              className="mt-1 w-full h-10 text-lg border-2 rounded-lg text-black"
              onChange={(event) => setInstitute(event.target.value)}
            />
            <label className="mt-4 text-lg mr-auto">Password</label>
            <input
              type="password"
              className="mt-1 w-full h-10 text-lg border-2 rounded-lg text-black"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </form>
        <button
          className="bg-yellow-500 mt-4 rounded-md text-white w-[40%] p-2 mb-2"
          onClick={handleSubmit}
        >
          SignUp
        </button>
        <h1 className="m-2">
          Already have an account?
          <span
            className="text-yellow-400 cursor-pointer ml-1 font-bold"
            onClick={toLoginPage}
          >
            LogIn
          </span>
        </h1>
      </div>
    </div>
  );
};
