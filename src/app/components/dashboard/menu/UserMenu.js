import React from "react";
import MenuItems from "./MenuItems";
import { TbUserPentagon } from "react-icons/tb";
import { MdAnnouncement } from "react-icons/md";
const UserMenu = () => {
  return (
    <div>
      <MenuItems
        icon={TbUserPentagon}
        label="Send Money"
        address="send-money"
      />
      <MenuItems
        icon={MdAnnouncement}
        label="CashInRequest"
        address="casinRequest"
      />
      <MenuItems
        icon={MdAnnouncement}
        label="CashOutRequest"
        address="cashout"
      />
    </div>
  );
};

export default UserMenu;
