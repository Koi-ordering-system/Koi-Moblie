export interface TravelsResponse {
  id: string;
  farmId: string;
  farmName: string;
  farmImages: string[];
  koiDetails: KoiDetail[];
  days: number;
  price: number;
}

export interface KoiDetail {
  id: string;
  name: string;
}
