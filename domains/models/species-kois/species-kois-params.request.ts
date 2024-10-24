import { RootRequest } from "@/domains/models/root/root.request";

export interface SpeciesKoisParams extends RootRequest {
  sortBy?: string;
  sortOrder?: string;
  search?: string;
}
