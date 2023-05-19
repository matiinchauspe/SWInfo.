import PropTypes from "prop-types";
import * as React from "react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FilterResources = React.forwardRef(
  ({ searchValue, onChangeSearch }, ref) => (
    <div className="flex gap-6 p-5 rounded-md bg-slate-200 dark:bg-slate-800">
      <Input
        ref={ref}
        placeholder="Search planets by name"
        className="border border-slate-300 bg-white dark:bg-slate-900 text-slate-700 dark:text-white"
        value={searchValue}
        onChange={onChangeSearch}
      />
      {/* // ? Not used at the moment */}
      <Select defaultValue="planets">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Resources" />
        </SelectTrigger>
        <SelectContent className="bg-slate-800">
          <SelectItem value="planets" className="text-slate-300" selected>
            Planets
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
);
FilterResources.displayName = "FilterResources";
FilterResources.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onChangeSearch: PropTypes.func.isRequired,
};

export { FilterResources };
