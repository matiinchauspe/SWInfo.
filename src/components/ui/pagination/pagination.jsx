import PropTypes from "prop-types";
import * as React from "react";

import { cn } from "@/utils";
import { PaginationProvider, usePaginationContext } from "./pagination.context";

import { Button } from "@/components/ui/button";

const PaginationRoot = React.forwardRef(
  ({ className, total, pagination, children }, ref) => (
    <PaginationProvider value={{ total, ...pagination }}>
      <div
        ref={ref}
        className={cn(
          "max-w-screen-lg flex justify-center w-full gap-6 m-auto py-5 border-t border-slate-700",
          className
        )}
      >
        {children}
      </div>
    </PaginationProvider>
  )
);
PaginationRoot.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  total: PropTypes.number.isRequired,
  pagination: PropTypes.shape({
    active: PropTypes.number.isRequired,
    next: PropTypes.func.isRequired,
    previous: PropTypes.func.isRequired,
  }).isRequired,
};
PaginationRoot.displayName = "PaginationRoot";

const PaginationPrevious = React.forwardRef(({ children }, ref) => {
  const { previous, active } = usePaginationContext();

  const handlePrevious = () => previous();

  return (
    <Button
      ref={ref}
      variant="outline"
      disabled={active === 1}
      onClick={handlePrevious}
    >
      {children}
    </Button>
  );
});
PaginationPrevious.propTypes = {
  children: PropTypes.node.isRequired,
};
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = React.forwardRef(({ children }, ref) => {
  const { next, active, total } = usePaginationContext();

  const handleNext = () => next();

  return (
    <Button
      ref={ref}
      variant="outline"
      disabled={total <= active}
      onClick={handleNext}
    >
      {children}
    </Button>
  );
});
PaginationNext.propTypes = {
  children: PropTypes.node.isRequired,
};
PaginationNext.displayName = "PaginationNext";

export { PaginationRoot, PaginationNext, PaginationPrevious };
