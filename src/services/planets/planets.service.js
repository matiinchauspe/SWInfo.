import { buildUrl } from "@/utils";

import { TransformPlanet, TransformPlanets } from "./planets.transform";

const { VITE_BASE_API_URL } = import.meta.env;

export const getPlanets = async (params) => {
  let url = `${VITE_BASE_API_URL}/planets`;
  if (params) {
    url = buildUrl(url, params);
  }

  try {
    const response = await fetch(url);

    const { count, next, previous, results } = TransformPlanets(
      await response.json()
    );

    return {
      success: true,
      count,
      next,
      previous,
      results,
    };
  } catch (error) {
    console.error("Error fetching planets", error);
    return {
      success: false,
      error,
    };
  }
};

export const getPlanet = async (id) => {
  try {
    const response = await fetch(`${VITE_BASE_API_URL}/planets/${id}`);

    const planet = TransformPlanet(await response.json());

    return {
      success: true,
      planet,
    };
  } catch (error) {
    console.error("Error fetching planet", error);
    return {
      success: false,
      error,
    };
  }
};
