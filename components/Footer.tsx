import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="border-t py-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
          />
          {/* copyright */}
          <div className="text-muted-foreground">
            Copyright &copy; Ali Siahi. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
