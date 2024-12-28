import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Succesful");
        }
        localStorage.setItem("Users", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
        toast.error("Signup failed" + err.response.data.message);
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div id="my_modal_3" className="w-[600px]">
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span> <br />
                <input
                  type="name"
                  placeholder="enter your name"
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <span>email</span> <br />
                <input
                  type="email"
                  placeholder="enter your email"
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <span>password</span> <br />
                <input
                  type="password"
                  placeholder="enter your password"
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="flex justify-around mt-4">
                <button className="bg-pink-400 font-white rounded-md px-3 py-3 hover:bh-pink-700 duration-300 ">
                  signup
                </button>
                <div>
                  Already have account?
                  <a
                    className="text-blue-500 underline cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    login{" "}
                  </a>
                  <Login />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
