import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import HeroSection from "@/Components/HeroSection";
import Searchbar from "@/Components/Searchbar";
import Sidebar, { SidebarItem } from "@/Components/SidebarSetup";
import {
  LayoutDashboard,
  Home,
  Layers,
  Flag,
  LifeBuoy,
  Settings,
  Gamepad,
  Book,
} from "lucide-react";

import Image from "next/image";

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <div className="flex flex-1">
        {" "}
        <Sidebar>
          <SidebarItem icon={<Home size={20} />} text="Home" />
          <SidebarItem icon={<Gamepad size={20} />} text="Consoles" />
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Categories" />
          <SidebarItem icon={<Book size={20} />} text="Blog" />
          {/* <SidebarItem icon={<Layers size={20} />} text="Tasks"/> */}
          {/* <SidebarItem icon={<Flag size={20} />} text="Reporting" /> */}
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </Sidebar>
        <div className="flex-1 mt-3">
          <Searchbar />
          <main className="flex-1"></main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
