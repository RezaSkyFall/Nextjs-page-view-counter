import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  const navs = [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Prices",
      href: "/prices",
    },
    {
      label: "About us",
      href: "/about-us",
    },
  ];
  return (
    <nav className=" p-4 bg-neutral-900 border-b border-b-neutral-800">
      <ul className="max-w-md m-auto flex gap-3">
        {navs.map((item, index) => (
          <li className="hover:text-amber-400 transition-colors" key={index}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
