import PropTypes from "prop-types";
import * as React from "react";

import { cn } from "@/utils/index";

const Card = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col border dark:border-slate-700 rounded-md p-5 shadow-md gap-2 dark:bg-slate-800",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
Card.displayName = "Card";
Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const CardTitle = ({ className, children }) => (
  <h3
    className={cn(
      "text-slate-700 font-bold tracking-wide text-center text-xl",
      className
    )}
  >
    {children}
  </h3>
);
CardTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const CardImage = ({ className, height = 100, width = 100, ...props }) => (
  <img
    height={height}
    width={width}
    className={cn("rounded-none", className)}
    {...props}
  />
);
CardImage.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

const CardContent = ({ className, children, ...props }) => (
  <div className={cn("p-2 text-sm text-emerald-500", className)} {...props}>
    {children}
  </div>
);
CardContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const CardActions = ({ className, children, ...props }) => (
  <div className={cn("flex", className)} {...props}>
    {children}
  </div>
);
CardActions.displayName = "CardActions";
CardActions.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export { Card, CardContent, CardTitle, CardImage, CardActions };
