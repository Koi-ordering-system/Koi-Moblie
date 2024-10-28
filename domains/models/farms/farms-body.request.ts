export interface FarmsBody {
  name: string;
  owner: string;
  address: string;
  description: string;
  farmImages: string[];
}

export interface FarmAddKoiBody {
  id: string;
  quantity: number;
}
