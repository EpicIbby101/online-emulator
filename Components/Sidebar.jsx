import React from "react";
import SidebarSetup, { SidebarItem } from "./SidebarSetup";
import { Home } from "lucide-react";

const Sidebar = () => {
  return (
    <>
      <div className="flex">
        <Sidebar>
          <SidebarItem icon={<Home size={20} />} text="Home" alert />
        </Sidebar>
      </div>
    </>
  );
};

export default Sidebar;
