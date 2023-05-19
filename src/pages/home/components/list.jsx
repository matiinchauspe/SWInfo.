import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { cn } from "@/utils";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardActions,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import {
  PaginationNext,
  PaginationPrevious,
  PaginationRoot,
} from "@/components/ui/pagination";
import { Paragraph } from "@/components/ui/paragraph";
import { Text } from "@/components/ui/text";

const List = ({ data, pagination, totalPages }) => {
  const hasData = Boolean(data.length);

  return (
    <>
      {hasData && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((planet) => (
            <Card
              key={planet.name}
              className="flex flex-col justify-between border-none"
            >
              <CardTitle className="dark:text-amber-300">
                {planet.name}
              </CardTitle>
              <CardContent>
                <Paragraph className="text-left flex gap-1 items-center">
                  <Text className="font-bold">Name:</Text>
                  <Text color="tertiary" size="sm">
                    {planet.name}
                  </Text>
                </Paragraph>
                <Paragraph className="text-left flex gap-1 items-center">
                  <Text className="font-bold">Climate:</Text>
                  <Text color="tertiary" size="sm">
                    {planet.climate}
                  </Text>
                </Paragraph>
                <Paragraph className="text-left flex gap-1 items-center">
                  <Text className="font-bold">Population:</Text>
                  <Text color="tertiary" size="sm">
                    {planet.population}
                  </Text>
                </Paragraph>
                <Paragraph className="text-left flex gap-1 items-baseline">
                  <Text className="font-bold">Terrain:</Text>
                  <Text color="tertiary" size="sm">
                    {planet.terrain}
                  </Text>
                </Paragraph>
              </CardContent>
              <CardActions className="flex justify-end">
                <Link
                  className={cn(
                    buttonVariants({ variant: "subtle" }),
                    "dark:hover:bg-slate-900"
                  )}
                  to={`/planets/${planet.id}`}
                >
                  View More
                </Link>
              </CardActions>
            </Card>
          ))}
        </div>
      )}
      {!hasData && (
        <div className="flex flex-col items-center justify-center p-5 rounded-md bg-slate-200 dark:bg-slate-800">
          <p className="text-slate-700 dark:text-white">No results found</p>
        </div>
      )}
      <PaginationRoot
        total={totalPages}
        pagination={pagination}
        className="max-w-screen-lg flex justify-center w-full gap-24 m-auto mt-5 py-5"
      >
        <PaginationPrevious>Anterior</PaginationPrevious>
        <PaginationNext>Siguiente</PaginationNext>
      </PaginationRoot>
    </>
  );
};
List.propTypes = {
  data: PropTypes.array.isRequired,
  pagination: PropTypes.object.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export { List };
