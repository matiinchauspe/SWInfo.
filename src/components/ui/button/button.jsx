import PropTypes from "prop-types";
import * as React from "react";

import { Icons } from "@/components/ui/icons";

import { cn } from "@/utils";
import { buttonVariants } from "./button.variants";

const Button = React.forwardRef(
  ({ className, variant, size, loading = false, children, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    >
      {loading ? <Icons.Loader className="mr-2 h-4 w-4 animate-spin" /> : null}
      {children}
    </button>
  )
);
Button.displayName = "Button";
Button.propTypes = {
  variant: PropTypes.oneOf(["default", "outline", "subtle", "ghost", "link"]),
  size: PropTypes.oneOf(["default", "sm", "lg"]),
  loading: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export { Button };
