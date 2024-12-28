import Home from "./Home/Home";
import { Navigate, Routes, Route } from "react-router-dom";
import Course from "./components/Course";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";


export default function App() {
  const [authUser, setAuthuser] = useAuth()
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to={"/signup"} />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </>
  );
}
