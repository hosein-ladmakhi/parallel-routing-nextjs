"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Blogs",
    path: "/blogs",
  },
];

export default function Navbar() {
  const path = usePathname();
  console.log("path", path);
  return (
    <header>
      <nav>
        <ul>
          {menuItems.map((menuItem) => (
            <li key={menuItem.path}>
              <Link
                style={menuItem.path === path ? styles.activeLink : styles.link}
                href={menuItem.path}
              >
                {menuItem.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  activeLink: {
    color: "red",
  },
  link: {
    color: "#000",
  },
};
