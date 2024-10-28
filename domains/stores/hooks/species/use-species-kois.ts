import { SpeciesKoisParams } from "@/domains/models/species-kois";
import { QueryKey } from "@/domains/query-key";
import { speciesKoiApi } from "@/domains/services/species-koi/species-koi.service";
import { useQuery } from "@tanstack/react-query";

interface SpeciesKoiQuery {
  options?: SpeciesKoisParams;
}

export const useSpeciesKoiQuery = ({ options }: SpeciesKoiQuery) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [QueryKey.LIST_SPECIES_KOI, ...(options ? [options] : [])],
    queryFn: async () => await speciesKoiApi.getSpeciesKoiList(options),
  });

  return { data, isLoading, error, refetch };
};
