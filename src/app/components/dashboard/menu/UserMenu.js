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
        label="Announcement"
        address="announcement"
      />
    </div>
  );
};

export default UserMenu;
