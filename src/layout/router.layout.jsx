import { clsx } from "clsx";
import { Outlet, useLocation } from "react-router-dom";

import { useThemeMode } from "@/hooks";

import { Navbar } from "@/components";

import { Paragraph } from "@/components/ui/paragraph";
import { Text } from "@/components/ui/text";

const RouterLayout = () => {
  const [mode] = useThemeMode();
  const { pathname } = useLocation();

  const isHome = pathname.includes("/home");

  const title = isHome ? "< Resources >" : "< Planet Detail >";
  const description = isHome
    ? "Choose a resource and check the information (at the moment, only for planets)."
    : "See more details about the planet you are looking for.";

  return (
    <div
      className={clsx(
        `min-h-screen bg-slate-50 dark:bg-slate-900 antialiased`,
        {
          dark: mode === "dark",
          light: mode === "light",
        }
      )}
    >
      <header>
        <Navbar />
      </header>
      <main className="relative h-screen flex items-center justify-center overflow-x-hidden">
        <div className="container pt-32 max-w-5xl w-full mx-auto h-full flex flex-col gap-6">
          <Text size="3xl" className="dark:text-amber-700 font-bold">
            {title}
          </Text>
          <Paragraph className="text-left">{description}</Paragraph>
          <div className="w-full rounded-md">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};
export { RouterLayout };
