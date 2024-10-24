export interface SpeciesKoiDetailResponse {
  name: string;
  description: string;
  minSize: number;
  maxSize: number;
  price: number;
  colors: string[];
  farms: Farm[];
  imageUrls: string[];
}

export interface Farm {
  farmKoiId: string;
  farmId: string;
  name: string;
}
