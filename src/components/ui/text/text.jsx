import PropTypes from "prop-types";

import { cn } from "@/utils/index";
import { textVariants } from "./text.variants";

const Text = ({ size, color, weight, children, className }) => (
  <span className={cn(textVariants({ size, color, weight, className }))}>
    {children}
  </span>
);
Text.propTypes = {
  size: PropTypes.oneOf(["normal", "xs", "sm", "lg", "xl", "2xl", "3xl"]),
  color: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  weight: PropTypes.oneOf(["normal", "bold", "light"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export { Text };
