import { TravelsParamsRequest } from "@/domains/models/travels";
import { QueryKey } from "@/domains/query-key";
import { travelApi } from "@/domains/services/travel/travel.service";
import { useQuery } from "@tanstack/react-query";

interface TravelsQuery {
  options?: TravelsParamsRequest;
}

export const useTravelsQuery = ({ options }: TravelsQuery) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKey.LIST_TRAVELS, ...(options ? [options] : [])],
    queryFn: async () => await travelApi.getListTravels(options),
  });

  return { data, isLoading, error };
};
