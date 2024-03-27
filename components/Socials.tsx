"use client";

import Link from "next/link";
import {
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

const icons = [
  {
    path: "https://www.linkedin.com/in/ali-siahi/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/alisiahi",
    name: <RiGithubFill />,
  },
  {
    path: "/",
    name: <RiFacebookFill />,
  },
  {
    path: "/",
    name: <RiInstagramFill />,
  },
];

interface SocialsProps {
  containerStyles: string;
  iconsStyles: string;
}

const Socials = ({ containerStyles, iconsStyles }: SocialsProps) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
