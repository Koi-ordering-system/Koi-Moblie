import { QueryKey } from "@/domains/query-key";
import { farmApi } from "@/domains/services/farms/farms.service";
import { useQuery } from "@tanstack/react-query";

interface UseFarmsDetailProps {
  id: string;
}

export const useFarmsDetail = ({ id }: UseFarmsDetailProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKey.DETAIL_FARM, id],
    queryFn: () => farmApi.getFarmDetail(id),
  });

  return {
    data,
    isLoading,
    error,
  };
};
