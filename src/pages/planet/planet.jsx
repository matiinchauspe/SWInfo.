import { useFetchBy } from "@/hooks";
import { useParams } from "react-router-dom";

import { cn } from "@/utils";

import { LoadingSection } from "@/components";
import { Error } from "@/pages/error";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { headingVariants } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { Text } from "@/components/ui/text";

const Planet = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetchBy(id);

  if (error) {
    return <Error />;
  }

  return (
    <>
      {loading && <LoadingSection />}
      {data?.planet && (
        <Card className="flex flex-col justify-between border-none">
          <CardTitle
            className={cn(
              headingVariants({ size: "sm" }),
              "dark:text-amber-300 lg:text-center border-b dark:border-slate-700 p-2"
            )}
          >
            {data.planet.name}
          </CardTitle>
          <CardContent>
            <Paragraph className="text-left flex gap-2">
              <Text className="font-light" size="xl">
                Name:
              </Text>
              <Text color="tertiary" size="xl">
                {data.planet.name}
              </Text>
            </Paragraph>
            <Paragraph className="text-left flex gap-2">
              <Text className="font-light" size="xl">
                Climate:
              </Text>
              <Text color="tertiary" size="xl">
                {data.planet.climate}
              </Text>
            </Paragraph>
            <Paragraph className="text-left flex gap-2">
              <Text className="font-light" size="xl">
                Diameter:
              </Text>
              <Text color="tertiary" size="xl">
                {data.planet.diameter}
              </Text>
            </Paragraph>
            <Paragraph className="text-left flex gap-2">
              <Text className="font-light" size="xl">
                Gravity:
              </Text>
              <Text color="tertiary" size="xl">
                {data.planet.gravity}
              </Text>
            </Paragraph>
            <Paragraph className="text-left flex gap-2">
              <Text className="font-light" size="xl">
                Orbital Period:
              </Text>
              <Text color="tertiary" size="xl">
                {data.planet.orbital_period}
              </Text>
            </Paragraph>
            <Paragraph className="text-left flex gap-2">
              <Text className="font-light" size="xl">
                Population:
              </Text>
              <Text color="tertiary" size="xl">
                {data.planet.population}
              </Text>
            </Paragraph>
            <Paragraph className="text-left flex gap-2">
              <Text className="font-light" size="xl">
                Rotation Period:
              </Text>
              <Text color="tertiary" size="xl">
                {data.planet.rotation_period}
              </Text>
            </Paragraph>
            <Paragraph className="text-left flex gap-2">
              <Text className="font-light" size="xl">
                Surface Water:
              </Text>
              <Text color="tertiary" size="xl">
                {data.planet.surface_water}
              </Text>
            </Paragraph>
            <Paragraph className="text-left flex gap-2">
              <Text className="font-light" size="xl">
                Terrain:
              </Text>
              <Text color="tertiary" size="xl">
                {data.planet.terrain}
              </Text>
            </Paragraph>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export { Planet };
