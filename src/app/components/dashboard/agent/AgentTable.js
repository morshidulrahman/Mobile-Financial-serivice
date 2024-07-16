import React from "react";

const AgentTable = ({ requestLists, refetch }) => {
  const { status, transactionType, amount, mynumber } = requestLists;

  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        {mynumber}
      </td>
      <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        {amount}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500   whitespace-nowrap">
        {transactionType}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500   whitespace-nowrap">
        {status}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500   whitespace-nowrap flex gap-1">
        <button
          onClick={""}
          className="px-3 py-2 text-sm bg-green-500 text-white rounded-full flex items-center justify-center font-semibold duration-300 transition-all hover:scale-105"
        >
          Accept
        </button>
      </td>
    </tr>
  );
};

export default AgentTable;
