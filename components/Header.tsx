"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-indigo-900 text-white shadow-sm fixed top-0 left-0 z-10">
      <nav className="flex items-center justify-between px-4 sm:px-6 py-2 h-16">
        {/* Left side — logo/title */}
        <div className="flex items-center space-x-3">
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

        {/* Hamburger for mobile */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-indigo-800 focus:outline-none"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Right side — buttons */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex sm:items-center sm:space-x-3 absolute sm:static top-16 left-0 w-full sm:w-auto bg-indigo-900 sm:bg-transparent border-t sm:border-none transition-all duration-300`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 px-4 sm:px-0 py-3 sm:py-0 space-y-2 sm:space-y-0">
            <Button
              variant="outline"
              className="text-sm w-full sm:w-auto border-white text-white"
            >
              Developers
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm w-full sm:w-auto">
              Switch to Test
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
