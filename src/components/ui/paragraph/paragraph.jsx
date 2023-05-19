import PropTypes from "prop-types";
import * as React from "react";

import { cn } from "@/utils";
import { paragraphVariants } from "./paragraph.variants";

const Paragraph = React.forwardRef(
  ({ className, size, children, ...props }, ref) => (
    <p
      ref={ref}
      {...props}
      className={cn(paragraphVariants({ size, className }))}
    >
      {children}
    </p>
  )
);
Paragraph.displayName = "Paragraph";
Paragraph.propTypes = {
  size: PropTypes.oneOf(["default", "sm", "xs"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export { Paragraph };
