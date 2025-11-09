"use client";

import Image from "next/image";
import { useSidebar } from "@/context/SidebarContext";
import { Menu, X, EllipsisVertical } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <header className="fixed top-0 left-0 z-10 w-full bg-indigo-900 text-white shadow-sm">
      <nav className="flex items-center justify-between px-4 sm:px-6 h-16">
        {/* Left Section */}
        <div className="flex items-center space-x-3">
          {/* Hamburger for Mobile */}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md hover:bg-indigo-800 focus:outline-none lg:hidden transition sm:mx-0"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo Group */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain -mx-1 sm:mx-0 -ml-3 "
            />

            <Image
              src="/dots.png"
              alt="Grid Dots"
              width={22}
              height={22}
              className="h-10 w-10 object-contain -mx-1 sm:mx-0"
            />

            <p className="text-lg sm:text-xl font-semibold">|</p>

            <div className="flex items-center space-x-2">
              <Image
                src="/logo_2.png"
                alt="Secure ID"
                width={22}
                height={22}
                className="h-8 w-8 object-contain -mx-1 sm:mx-0"
              />
              <h1 className="text-base sm:text-lg font-semibold">Secure ID</h1>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Buttons for large screens */}
          <div className="hidden sm:flex items-center space-x-3">
            <Button
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-indigo-800 hover:text-white"
            >
              Developers
            </Button>
            <Button
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-indigo-800 hover:text-white"
            >
              Switch to Test
            </Button>
          </div>

          {/* Dropdown for mobile */}
          <div className="sm:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 rounded-md hover:bg-indigo-800">
                  <EllipsisVertical size={20} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-40 bg-white text-black shadow-md"
              >
                <DropdownMenuItem className="">Developers</DropdownMenuItem>
                <DropdownMenuItem>Switch to Test</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
