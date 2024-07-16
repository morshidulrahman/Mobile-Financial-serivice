import axios from "axios";
import React, { useEffect, useState } from "react";

const CashOut = () => {
  const [mynumber, setnumber] = useState("");

  useEffect(() => {
    const localst = localStorage.getItem("email");
    setnumber(JSON.parse(localst));
  }, []);

  const handlesubmit = async (e) => {
    e.preventDefault();
    // Send request to server

    const from = e.target;
    const agentnumber = from.agentnumber.value;
    const password = from.password.value;
    const amount = from.amount.value;

    const userRequest = {
      agentnumber,
      password,
      amount,
      mynumber,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/cashout",
        userRequest
      );
      console.log(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-100 p-10 rounded-md w-[50%]">
        <form className="flex flex-col gap-4" onSubmit={handlesubmit}>
          <h1 className="text-center mb-2 font-bold capitalize">Cash Out</h1>
          <label>Enter Agent Number:</label>
          <input
            type="text"
            name="agentnumber"
            className="px-3 py-2 rounded-md block outline-none"
          />
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            className="px-3 py-2 rounded-md block outline-none"
          />
          <label>Password:</label>
          <input
            type="text"
            name="password"
            className="px-3 py-2 rounded-md block outline-none"
          />
          <button
            type="submit"
            className="bg-gray-500 text-white rounded-md px-2 py-2"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default CashOut;
