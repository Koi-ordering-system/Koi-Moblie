export interface TravelDetailResponse {
  id: string;
  farmId: string;
  farmName: string;
  farmImages: string[];
  farmOwner: string;
  farmAddress: string;
  farmDescription: string;
  farmRating: number;
  days: number;
  price: number;
  koiDetails: KoiDetail[];
}

export interface KoiDetail {
  id: string;
  name: string;
  images: string[];
  description: string;
  minSize: number;
  maxSize: number;
  price: number;
  quantity: number;
}
