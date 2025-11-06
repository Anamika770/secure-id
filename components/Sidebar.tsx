"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  Home,
  FileText,
  CreditCard,
  Shield,
  UserCheck,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  IdCard,
  Building2,
  User,
  Wrench,
  ShoppingBag,
  Headphones,
  Landmark,
  icons,
} from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    {
      section: "Main",
      items: [
        { name: "Home", href: "/", icon: Home },
        { name: "Analytics", href: "/analytics", icon: FileText },
      ],
    },
    {
      section: "KYC Studio",
      items: [
        { name: "All Verifications", href: "/kyc/all", icon: IdCard },
        { name: "KYC Templates", href: "/kyc/templates", icon: Building2 },
        { name: "Video KYC", href: "/kyc/video", icon: User },
        { name: "1-Click Onboarding", href: "/kyc/onboarding", icon: Wrench },
        { name: "Smart OCR", href: "/kyc/ocr", icon: ShoppingBag },
      ],
    },
    {
      section: "Bank Account",
      items: [
        { name: "Bank Account", href: "/bank/account", icon: CreditCard },
        { name: "Reverse Penny Drop", href: "/bank/reverse", icon: Headphones },
        { name: "IFSC", href: "/bank/ifsc", icon: Landmark },
      ],
    },
    {
      section: "Aadhaar / PAN",
      items: [
        { name: "Aadhaar Masking", href: "/aadhaar/masking", icon: Shield },
        { name: "DigiLocker – Aadhaar", href: "/aadhaar/digilocker", icon: null },
        { name: "PAN", href: "/pan", icon: UserCheck },
        { name: "PAN 360", href: "/pan/360", icon: null },
      ],
    },
  ];

  const [openSections, setOpenSections] = useState<string[]>(["Main"]); // home open by default

  const toggleSection = (sectionName: string) => {
    setOpenSections((prev) =>
      prev.includes(sectionName)
        ? prev.filter((s) => s !== sectionName)
        : [...prev, sectionName]
    );
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white flex flex-col shadow-md transition-transform duration-300 ease-in-out z-50",
          "w-60 scroll-",
          isOpen ? "translate-x-0" : "",
          "lg:translate-x-0 lg:static lg:shadow-none"
        )}
      >
        {/* Scrollable Menu */}
        <ScrollArea className="flex-1 px-4 py-3 overflow-y-auto">
          {menu.map((section) => {
            const isOpen = openSections.includes(section.section);
            return (
              <>
                <div key={section.section} className="mb-4">
                  <button
                    onClick={() => toggleSection(section.section)}
                    className="flex w-full items-center justify-between text-left text-[13px] font-semibold text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    <span>{section.section}</span>
                    {isOpen ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronUp className="w-4 h-4" />
                    )}
                  </button>

                  <ul
                    className={cn(
                      "mt-2 space-y-0.5 overflow-hidden transition-all duration-300 ease-in-out",
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    {section.items.map((item) => {
                      const isActive = pathname === item.href;
                      const Icon = item.icon;
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              "flex items-center gap-3 px-3 py-2 rounded-md text-[13px] transition-all",
                              isActive
                                ? "bg-indigo-50 text-indigo-600 font-medium"
                                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                            )}
                          >
                            {Icon ? (
                            <Icon
                              size={16}
                              className={cn(
                                "w-4 h-4 transition-colors duration-200",
                                isActive ? "text-indigo-600" : "text-gray-400 group-hover:text-gray-700"
                              )}
                            />
                          ) : (
                            /* placeholder to keep spacing when no icon is provided */
                            <span className="w-4 h-4 inline-block" />
                          )}
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <hr className="border-gray-200 mb-2" />
              </>
            );
          })}
        </ScrollArea>

        {/* Footer */}
        <div className="px-4 py-3 text-xs text-gray-600 border-t bg-gray-300 h-20 flex items-center justify-center">
          <span>© 2025 Secure ID</span>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
