import React from "react";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();
  function handlelogout() {
    try {
      setAuthUser({ ...authUser, user: null });
      localStorage.removeItem("Users");
      toast.success("Logout Succesfull");

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 rounded-md text-white"
        onClick={handlelogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
