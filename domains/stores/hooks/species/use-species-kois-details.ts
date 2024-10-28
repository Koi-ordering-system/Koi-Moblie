import { QueryKey } from "@/domains/query-key";
import { speciesKoiApi } from "@/domains/services/species-koi/species-koi.service";
import { useQuery } from "@tanstack/react-query";

interface SpeciesKoiDetailQuery {
  id: string;
}

export const useSpeciesKoiDetailQuery = ({ id }: SpeciesKoiDetailQuery) => {
  if (!id) {
    throw new Error("id is required");
  }

  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKey.LIST_SPECIES_KOI, id],
    queryFn: async () => await speciesKoiApi.getSpeciesKoiDetail(id),
  });

  return { data, isLoading, error };
};
