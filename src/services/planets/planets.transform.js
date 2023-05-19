import { formatNumber } from "@/utils";

const TransformPlanet = (planet) => {
  const id = planet.url.split("/")[5];

  return {
    id,
    name: planet.name,
    population:
      planet.population !== "unknown"
        ? formatNumber(planet.population)
        : "unknown",
    climate: planet.climate,
    terrain: planet.terrain,
    surface_water: planet.surface_water,
    diameter: formatNumber(planet.diameter),
    gravity: planet.gravity,
    rotation_period: planet.rotation_period,
    orbital_period: planet.orbital_period,
  };
};

const TransformPlanets = ({ count, next, previous, results }) => ({
  count,
  next,
  previous,
  results: results.map(TransformPlanet),
});

export { TransformPlanet, TransformPlanets };
