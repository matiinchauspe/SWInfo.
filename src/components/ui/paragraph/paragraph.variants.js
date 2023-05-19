import { cva } from "class-variance-authority";

export const paragraphVariants = cva(
  "max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center",
  {
    variants: {
      size: {
        default: "text-base sm:text-lg",
        sm: "text-sm sm:text-base",
        xs: "text-xs sm:text-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);
