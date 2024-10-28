import { QueryKey } from "@/domains/query-key";
import { travelApi } from "@/domains/services/travel/travel.service";
import { useQuery } from "@tanstack/react-query";

interface TravelDetailQuery {
  id: string;
}

export const useTravelDetailQuery = ({ id }: TravelDetailQuery) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKey.TRAVELS_DETAIL, id],
    queryFn: () => travelApi.getTravel(id),
  });

  return {
    data,
    isLoading,
    error,
  };
};
