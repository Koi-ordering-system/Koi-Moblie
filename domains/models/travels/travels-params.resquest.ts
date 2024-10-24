import { RootRequest } from "@/domains/models/root/root.request";

export interface TravelsParamsRequest extends RootRequest {
  keyword?: string;
}
