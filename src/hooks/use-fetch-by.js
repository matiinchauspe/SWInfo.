import { useEffect, useState } from "react";

import { PlanetsService } from "@/services";

export const useFetchBy = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPlanet = async () => {
    setLoading(true);
    const planet = await PlanetsService.getPlanet(id);
    if (!planet.success) {
      setError(true);
      setLoading(false);

      return;
    }

    setData(planet);
    setLoading(false);
  };

  useEffect(() => {
    fetchPlanet();
  }, []);

  return { data, loading, error, fetchPlanet };
};
