import { cva } from "class-variance-authority";
import PropTypes from "prop-types";

import { cn } from "@/utils/index";

const headingVariants = cva(
  "text-zinc-400 dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl",
        lg: "text-5xl md:text-6xl lg:text-7xl",
        sm: "text-2xl md:text-3xl lg:text-4xl",
        xs: "text-xl md:text-2xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const Heading = ({ children, className, size, ...props }) => (
  <h2 {...props} className={cn(headingVariants({ size, className }))}>
    {children}
  </h2>
);

Heading.propTypes = {
  size: PropTypes.oneOf(["default", "lg", "sm"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export { Heading, headingVariants };
