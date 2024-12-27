import React from "react";
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
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
              Login
            </button>
            <p>
              Not registered?
              <Link to="/signup" className="text-blue-500 underline ">
                Signup{" "}
              </Link>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
