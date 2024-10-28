export interface RootResponse<T> {
  succeeded: boolean;
  message: null;
  data: T | null;
}

export interface Data<T> {
  items: T;
  pageNumber: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
