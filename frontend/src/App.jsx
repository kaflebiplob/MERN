import Home from "./home/home";
import { Routes, Route } from "react-router-dom";
import Course from "./components/Course";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}
