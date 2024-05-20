import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { Register } from "./components/register";
import { Login } from "./components/login";
import { StudentDashBoard } from "./components/studentDashBoard";
import { InvigilatorDashboard } from "./components/invigilatorDashboard";
import { CreateExams } from "./components/createExams";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/studentDashboard" element={<StudentDashBoard />} />
        <Route path="/invigilatorDashboard" element={<InvigilatorDashboard />} />
        <Route path="/createExam" element={<CreateExams/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
