import React from "react";
import AppContext from "../Context/AppContext";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login} = useContext(AppContext);
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await login(email, password);
      console.log("Login successful:", res.data.msg);
      if(res?.data?.success){
        const role = res.data.role;
        if(role === "admin"){
          navigate("/admin");
        } else if(role === "user"){
          navigate("/user");
        }
        else{
          navigate("/login");
        }
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <>
    <Navbar />
    <div className="flex ">
      <div className="w-full md:w-4/12 "></div>
      <div className="w-full md:w-4/12 text-center text-3xl">
        <div>
          <h1 className="mt-5">Login</h1>
        </div>
        <form onSubmit={handleForm}>
          <div>
            <input
              required
              className="mt-5 p-2 border border-gray-300 rounded"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              className="mt-5 p-2 border border-gray-300 rounded"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mt-5 bg-green-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="w-full md:w-4/12"></div>
    </div>
    </>
  );
};

export default Login;
