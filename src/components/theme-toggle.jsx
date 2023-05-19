import { useThemeMode } from "@/hooks";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/ui/icons";

const ThemeToggle = () => {
  const [currentTheme, toggleTheme] = useThemeMode();

  const handleChangeTheme = (kind) => () => toggleTheme(kind);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <Icons.Sun className="rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100" />
          <Icons.Moon className="absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" forceMount>
        {currentTheme !== "light" && (
          <DropdownMenuItem onClick={handleChangeTheme("light")}>
            <Icons.Sun className="mr-2 h-4 w-4" />
            <span>Light</span>
          </DropdownMenuItem>
        )}
        {currentTheme !== "dark" && (
          <DropdownMenuItem onClick={handleChangeTheme("dark")}>
            <Icons.Moon className="mr-2 h-4 w-4" />
            <span>Dark</span>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ThemeToggle };
