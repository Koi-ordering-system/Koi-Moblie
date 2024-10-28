export interface SpeciesKoiDetailResponse {
  name: string;
  description: string;
  minSize: number;
  maxSize: number;
  price: number;
  colors: Color[];
  farms: Farm[];
  imageUrls: string[];
}

export interface Farm {
  farmKoiId: string;
  farmId: string;
  name: string;
}

export interface Color {
  id: string;
  name: string;
}
