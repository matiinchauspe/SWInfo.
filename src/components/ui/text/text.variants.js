import { cva } from "class-variance-authority";

export const textVariants = cva("font-normal tracking-normal leading-normal", {
  variants: {
    size: {
      normal: "text-normal sm:text-lg",
      xs: "text-xs sm:text-sm",
      sm: "text-sm sm:text-base",
      lg: "text-lg sm:text-xl",
      xl: "text-xl sm:text-2xl",
      "2xl": "text-xl md:text-3xl sm:text-2xl",
      "3xl": "text-2xl md:text-5xl sm:text-3xl",
    },
    color: {
      primary: "text-amber-700",
      secondary: "text-slate-700",
      tertiary: "text-slate-700 dark:text-zinc-300",
    },
    weight: {
      normal: "font-normal",
      bold: "font-bold",
      light: "font-light",
    },
  },
  defaultVariants: {
    size: "normal",
    color: "primary",
    weight: "normal",
  },
});
