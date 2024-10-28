import { create } from "zustand";

interface IdState {
  id: string;
  setId: (newId: string) => void;
}

const useIdStore = create<IdState>((set) => ({
  id: "",
  setId: (newId) => set({ id: newId }),
}));

export default useIdStore;
