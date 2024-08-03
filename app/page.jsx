import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import HeroSection from "@/Components/HeroSection";
import Sidebar, { SidebarItem } from "@/Components/SidebarSetup";
import {
  LayoutDashboard,
  Home,
  StickyNote,
  Layers,
  Flag,
  Calendar,
  LifeBuoy,
  Settings,
} from "lucide-react";

import Image from "next/image";

export default function Homepage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <>
        <Header />
        <HeroSection />
        <Sidebar>
          <SidebarItem icon={<Home size={20} />} text="Home" />
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Consoles"
            
          />
          <SidebarItem icon={<StickyNote size={20} />} text="Categories" />
          <SidebarItem icon={<Calendar size={20} />} text="Calendar"/>
          <SidebarItem icon={<Layers size={20} />} text="Tasks"/>
          <SidebarItem icon={<Flag size={20} />} text="Reporting" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </Sidebar>
        <Footer />
      </>
    </main>
  );
}
