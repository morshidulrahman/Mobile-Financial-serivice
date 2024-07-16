import axios from "axios";
import React from "react";
import { json, Link } from "react-router-dom";

const SignUp = () => {
  const handlesubmit = async (e) => {
    e.preventDefault();

    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;

    if (!/^\d{5}$/.test(password)) {
      return alert("PIN must be a 5-digit number");
    }

    const users = {
      email,
      password,
    };

    try {
      const { data } = await axios.post("http://localhost:5000/users", users);
      if (data.message) {
        alert(data.message);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="continer mx-auto px-5">
      <div className="flex justify-center items-center h-screen  ">
        <form
          onSubmit={handlesubmit}
          className="bg-gray-100 p-10 flex flex-col gap-5 w-[50%]"
        >
          <h1 className="text-center text-2xl font-bold capitalize">Sign up</h1>
          <input
            className="block py-3 px-3 outline-none rounded-md"
            type=""
            name="email"
            placeholder="Enter your email"
          />

          <input
            type="text"
            name="password"
            placeholder="Enter your password"
            className="block py-3 px-3 outline-none rounded-md"
          />
          <button
            type="submit"
            className="bg-slate-700 px-3 py-3 rounded-md text-white"
          >
            Submit
          </button>
          <Link to="/login">
            Already have an account? Login here.{" "}
            <span className="text-blue-600 hover:text-blue-800">
              Click here
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
