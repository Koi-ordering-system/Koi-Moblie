import { RootRequest } from "@/domains/models/root/root.request";

export interface TravelsParamsRequest extends RootRequest {
  keyword?: string;
  farmId?: string;
  koiId?: string;
  minPrice?: number;
  maxPrice?: number;
  startDate?: string;
  endDate?: string;
}
