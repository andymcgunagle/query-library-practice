import { useQuery } from "@tanstack/react-query";

import { getSuperherosData } from "../utils/getSuperherosData";

export function useGetSuperherosData() {
  return useQuery(
    ["superheros"],
    getSuperherosData,
    {
      cacheTime: 1000 * 60 * 5, // 5 minutes
      refetchInterval: 1000 * 60 * 1, // 1 minute
      refetchIntervalInBackground: true,
      staleTime: 1000 * 60 * 1, // 1 minute
    }
  );
};
