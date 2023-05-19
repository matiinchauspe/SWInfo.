import { createSafeContext } from "@/utils/create-safe-context";

export const [PaginationProvider, usePaginationContext] = createSafeContext(
  null,
  "PaginationRoot component was not found in tree"
);
