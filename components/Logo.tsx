import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="w-16 h-16 bg-primary rounded-full flex items-center justify-center"
    >
      <Image src="/logo.png" width={50} height={50} alt="" />
    </Link>
  );
};

export default Logo;
