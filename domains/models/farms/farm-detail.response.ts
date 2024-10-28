export interface FarmDetailResponse {
  name: string;
  owner: string;
  address: string;
  description: string;
  rating: number;
  farmImages: string[];
  kois: Kois[];
  trips: Trip[];
}

export interface Kois {
  id: string;
  name: string;
  quantity: number;
  imageUrls: string[];
}

export interface Trip {
  id: string;
  farmId: string;
  farmName: string;
  days: number;
  price: number;
}
