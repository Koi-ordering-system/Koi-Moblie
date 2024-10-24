export interface FarmsResponse {
  id: string;
  name: string;
  owner: string;
  address: string;
  description: string;
  rating: number;
  farmImages: farmImages[];
}

interface farmImages {
  id: string;
  url: string;
}
