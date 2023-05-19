import { useFetchPlanets } from "@/hooks";
import { usePagination } from "@mantine/hooks";
import { useEffect, useRef, useState } from "react";

import { useDebounce } from "@/hooks";

import { Error } from "@/pages/error";

import { LoadingSection } from "@/components";
import { FilterResources } from "@/pages/home/components/filter-resources/filter-resources";
import { List } from "./components";

const ITEMS_PER_PAGE = 10;

const Home = () => {
  const { data: planets, fetchPlanets, loading, error } = useFetchPlanets();
  const searchRef = useRef(null);

  const totalPages = Math.ceil(planets?.count / ITEMS_PER_PAGE);

  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce(search, 500);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const pagination = usePagination({
    total: totalPages,
    initialPage: 1,
    onChange(page) {
      fetchPlanets({ search: debouncedValue, page });
    },
  });

  useEffect(() => {
    fetchPlanets({ search: debouncedValue, page: 1 });
    searchRef.current?.focus();
  }, [debouncedValue]);

  return (
    <div className="flex flex-col gap-4">
      <FilterResources
        ref={searchRef}
        searchValue={search}
        onChangeSearch={handleSearch}
      />
      {loading && <LoadingSection />}
      {!loading && error && <Error retry={fetchPlanets} loading={loading} />}
      {!loading && !error && (
        <List
          data={planets?.results || []}
          totalPages={totalPages}
          pagination={pagination}
        />
      )}
    </div>
  );
};

export { Home };
