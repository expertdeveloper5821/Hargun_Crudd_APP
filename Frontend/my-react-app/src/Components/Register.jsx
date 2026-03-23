import React from "react";
import AppContext from "../Context/AppContext";
import { useContext } from "react";
import { useState } from "react";
import Navbar from "./Navbar";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const {registration} = useContext(AppContext);

    const handleForm = async (e) => {
        e.preventDefault();
        

        try {
            const result = await registration(name, email, password, "user");
            console.log("Registration successful:", result.data.msg);
        } catch (error) {
            console.error("Error during registration:", error);
        }

    };
  return (
    <>
    <Navbar />
    <div className="flex ">
      <div className="w-full md:w-4/12 "></div>
      <div className="w-full md:w-4/12 text-center text-3xl">
        <div>
          <h1 className="mt-5">Register</h1>
        </div>
        <form onSubmit={handleForm}>
          <div>
            <input required
              className="mt-5 p-2 border border-gray-300 rounded"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input required
              className="mt-5 p-2 border border-gray-300 rounded"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input required
              className="mt-5 p-2 border border-gray-300 rounded"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mt-5 bg-green-500">
              Register
            </button>
          </div>
        </form>
      </div>
      <div className="w-full md:w-4/12"></div>
    </div>
    </>
  );
};

export default Register;
