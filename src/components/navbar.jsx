import { Link, useLocation } from "react-router-dom";

import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

const Navbar = () => {
  const { pathname } = useLocation();
  const isHome = pathname.includes("/home");

  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-5xl mx-auto w-full flex justify-between items-center">
        {isHome ? (
          <Link className={buttonVariants({ variant: "link" })} to={"/"}>
            SWInfo App v1.0
          </Link>
        ) : (
          <Link className={buttonVariants({ variant: "subtle" })} to={"/"}>
            Back to home
          </Link>
        )}
        <Heading className="text-2xl dark:text-amber-700">SWInfo.</Heading>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
        <div className="hidden md:flex gap-4">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export { Navbar };
