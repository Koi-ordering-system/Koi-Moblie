import { Kois } from "@/domains/models/farms/farm-detail.response";

export interface FarmsResponse {
  id: string;
  name: string;
  owner: string;
  address: string;
  description: string;
  rating: number;
  farmImages: farmImages[];
  kois: Kois[];
}

interface farmImages {
  id: string;
  url: string;
}
