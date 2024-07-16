import axios from "axios";
import React, { useEffect, useState } from "react";

const SendMoney = () => {
  const [mynumber, setnumber] = useState("");

  useEffect(() => {
    const localst = localStorage.getItem("email");
    setnumber(JSON.parse(localst));
  }, []);

  const handlesubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const number = from.number.value;
    const amount = from.amount.value;

    if (parseInt(amount) < 50) {
      return alert("Amount must be a 50 number");
    }

    const userammount = {
      number,
      amount,
      mynumber,
    };

    try {
      const { data } = await axios.put(
        "http://localhost:5000/sendmoney",
        userammount
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
          <h1 className="text-center mb-2 font-bold capitalize">send money</h1>
          <label>Enter Phone Number:</label>
          <input
            type="text"
            name="number"
            className="px-3 py-2 rounded-md block"
          />
          <label>Amount:</label>
          <input type="number" name="amount" />
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

export default SendMoney;
