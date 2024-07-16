import React from "react";
import { TbUserPentagon } from "react-icons/tb";
import MenuItems from "./MenuItems";

const AgentMenu = () => {
  return (
    <div>
      <MenuItems
        icon={TbUserPentagon}
        label="Transactions Management"
        address="tranmanagements"
      />
    </div>
  );
};

export default AgentMenu;
