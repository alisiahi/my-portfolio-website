import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { Dispatch, SetStateAction } from "react";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/contact", name: "contact" },
];

interface NavProps {
  containerStyles: string;
  linkStyles: string;
  underlineStyles: string;
  setSheetOpen?: Dispatch<SetStateAction<boolean>>;
  sheetOpen?: boolean;
}

const Nav = ({
  containerStyles,
  linkStyles,
  underlineStyles,
  setSheetOpen = () => {},
  sheetOpen,
}: NavProps) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
            onClick={() => setSheetOpen && setSheetOpen(false)} // Check if setSheetOpen exists before invoking it
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
