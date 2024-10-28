import { create } from "zustand";
interface SearchState {
  search: {
    [key: string]: {
      searchValue: string;
    };
  };
  setSearch: (key: string, searchValue: string) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  search: {},

  setSearch: (key, searchValue) =>
    set((state) => ({
      search: {
        ...state.search,
        [key]: { searchValue },
      },
    })),
}));
