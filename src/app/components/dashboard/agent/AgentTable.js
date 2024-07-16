import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const AgentTable = ({ requestLists, refetch }) => {
  const { status, transactionType, amount, mynumber, _id, agentnumber } =
    requestLists;

  console.log(transactionType);

  // if (transactionType === "cashin") {
  //   return console.log("cashout done");
  // }

  const transactionlist = async () => {
    const userInfo = {
      status: "checked",
      amount,
      transactionType,
      mynumber,
      transaction: _id,
    };
    const { data } = await axios.post(
      "http://localhost:5000/transictionlist",
      userInfo
    );
    return data;
  };

  const acceptTransactions = async () => {
    try {
      if (transactionType == "cashin") {
        const { data } = await axios.put(
          `http://localhost:5000/transactionlist/${mynumber}`,
          { amount, agentnumber, transactionType }
        );

        if (data.modifiedCount > 0) {
          toast.success("cashin Successfully");
          refetch();
          transactionlist();
        }
      } else {
        const { data } = await axios.put(
          `http://localhost:5000/transactioncashout/${mynumber}`,
          { amount, agentnumber, transactionType }
        );

        if (data.modifiedCount > 0) {
          toast.success("cashout Successfully");
          refetch();
          transactionlist();
        }
      }
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        {mynumber}
      </td>
      <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        {amount}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 font-medium pl-16 whitespace-nowrap capitalize">
        {transactionType}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 font-medium  whitespace-nowrap">
        {status}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 font-medium  whitespace-nowrap  ">
        <button
          onClick={acceptTransactions}
          className="px-3 py-2 text-sm bg-green-500 text-white rounded-full flex items-center justify-center font-semibold duration-300 transition-all hover:scale-105"
        >
          Accept
        </button>
      </td>
    </tr>
  );
};

export default AgentTable;
