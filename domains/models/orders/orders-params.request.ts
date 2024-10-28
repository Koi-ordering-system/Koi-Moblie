import { RootRequest } from "@/domains/models/root/root.request";

export interface OrderParams extends RootRequest {
  keyword?: string; 
}
