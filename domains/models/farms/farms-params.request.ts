import { RootRequest } from "@/domains/models/root/root.request";

export interface FarmsParams extends RootRequest {
  sortBy?: "name" | "description" | "owner" | "address" | "rating";
  sortOrder?: "asc" | "desc";
  search?: string;
}

export interface FarmsFeedbackParams extends RootRequest {
  orderId: string;
  sortBy?: "name" | "description" | "owner" | "address" | "rating";
  sortOrder?: "asc" | "desc";
}
