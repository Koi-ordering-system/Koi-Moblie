import { FarmsParams } from "@/domains/models/farms";
import { QueryKey } from "@/domains/query-key";
import { farmApi } from "@/domains/services/farms/farms.service";
import { useQuery } from "@tanstack/react-query";

interface UseFarmsQuery {
  options?: FarmsParams;
}

const UseFarmsQuery = ({ options }: UseFarmsQuery) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [QueryKey.LIST_FARMS, ...(options ? [options] : [])],
    queryFn: () => farmApi.getFarmList(options),
  });

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};

export default UseFarmsQuery;
