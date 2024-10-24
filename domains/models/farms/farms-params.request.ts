import { RootRequest } from "@/domains/models/root/root.request";

export interface FarmsParams extends RootRequest {
  sortBy?: "name" | "description" | "owner" | "address" | "rating";

  order?: "asc" | "desc";
  search?: string;
}
