"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useSidebar } from "@/app/context/SidebarContext";

const Navbar = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <header className="w-full bg-indigo-900 text-white shadow-sm fixed top-0 left-0 z-10">
      <nav className="flex items-center justify-between px-4 sm:px-6 py-2 h-16">
        {/* Left side — logo/title */}
        <div className="flex items-center space-x-3">
          {/* Hamburger for mobile */}
        <div className="sm:hidden">
          <button
            onClick={() => toggleSidebar()}
            className="p-2 rounded-md hover:bg-indigo-800 focus:outline-none"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={128}
              height={128}
              className="h-10 w-10"
            />
            <h1 className="text-lg font-semibold">Secure ID</h1>
          </div>
          <Separator orientation="vertical" className="h-5 hidden sm:block" />
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
