"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {

  const pathname = usePathname();

  const menuItems = [
    {
      name: "About Me",
      path: "/aboutme",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Skills",
      path: "/skills",
    },
    {
      name: "Contact",
      path: "/contactme",
    },
  ];


  return (
    <div className="fixed right-30 top-1/2 -translate-y-1/2 flex flex-col gap-8 ">

      {menuItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`
            transition-all duration-300
            text-left
            ${
              pathname === item.path
                ? "text-[#CB1D85] font-bold scale-110 opacity-100 translate-x-[-10px]"
                : "text-[#CB1D85] opacity-40 hover:opacity-100 hover:scale-105 border rounded-lg p-3 hover:translate-x-[-5px]"
            }
          `}
        >
          {item.name}
        </Link>
      ))}

    </div>
  );
}