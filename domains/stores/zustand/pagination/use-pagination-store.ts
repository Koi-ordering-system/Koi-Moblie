import { create } from "zustand";

interface PaginationState {
  pagination: {
    [key: string]: {
      pageSize: number;
      pageIndex: number;
    };
  };
  setPagination: (key: string, pageSize: number, pageIndex: number) => void;
  updatePageSize: (key: string, pageSize: number) => void;
  updatePageIndex: (key: string, pageIndex: number) => void;
}

const usePaginationStore = create<PaginationState>((set) => ({
  pagination: {
    default: {
      pageSize: 10,
      pageIndex: 1,
    },
  },

  setPagination: (key, pageSize, pageIndex) =>
    set((state) => ({
      pagination: {
        ...state.pagination,
        [key]: { pageSize, pageIndex },
      },
    })),

  updatePageSize: (key, pageSize) =>
    set((state) => ({
      pagination: {
        ...state.pagination,
        [key]: {
          ...state.pagination[key],
          pageSize,
        },
      },
    })),

  updatePageIndex: (key, pageIndex) =>
    set((state) => ({
      pagination: {
        ...state.pagination,
        [key]: {
          ...state.pagination[key],
          pageIndex,
        },
      },
    })),
}));

export default usePaginationStore;
