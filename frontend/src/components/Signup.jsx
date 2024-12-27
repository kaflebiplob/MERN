import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Signup = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div id="my_modal_3" className="w-[600px]">
          <div className="modal-box">
            <form method="dialog">
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            </form>
            <h3 className="font-bold text-lg">Signup</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span> <br />
              <input
                type="text"
                placeholder="enter your name"
                className="w-80 px-3 border rounded-md outline-none"
              />
            </div>
            <div className="mt-4 space-y-2">
              <span>email</span> <br />
              <input
                type="email"
                placeholder="enter your email"
                className="w-80 px-3 border rounded-md outline-none"
              />
            </div>
            <div className="mt-4 space-y-2">
              <span>password</span> <br />
              <input
                type="password"
                placeholder="enter your password"
                className="w-80 px-3 border rounded-md outline-none"
              />
            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-pink-400 font-white rounded-md px-3 py-3 hover:bh-pink-700 duration-300 ">
                signup
              </button>
              <div>
                Already have account?
                <a
                  className="text-blue-500 underline cursor-pointer "
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  login{" "}
                </a>
                <Login />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
