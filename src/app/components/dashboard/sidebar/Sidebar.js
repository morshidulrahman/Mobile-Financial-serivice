import React, { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";

import { AiOutlineBars } from "react-icons/ai";
import AdminMenu from "../menu/AdminMenu";
import UserMenu from "../menu/UserMenu";
import AgentMenu from "../menu/AgentMenu";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <p>MFS BANK</p>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* sidebar start */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-sm rounded-lg justify-center items-center   mx-auto">
              <Link to="/">
                <p>MFS BANK</p>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between flex-1 mt-2">
            <nav>
              <UserMenu />
              <AgentMenu />
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <button
            onClick={"d"}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-[#ff593cf4]   hover:text-white transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
