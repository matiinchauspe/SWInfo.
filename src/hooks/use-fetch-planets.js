import { useEffect, useState } from "react";

import { PlanetsService } from "@/services";

export const useFetchPlanets = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPlanets = async (params) => {
    setLoading(true);
    const planets = await PlanetsService.getPlanets(params);
    if (!planets.success) {
      setError(true);
      setLoading(false);

      return;
    }

    setData(planets);
    setLoading(false);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return { data, loading, error, fetchPlanets };
};
