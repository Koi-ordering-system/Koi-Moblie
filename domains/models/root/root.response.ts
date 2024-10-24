export interface RootResponse<T> {
  succeeded: boolean;
  message: null;
  data: T;
}

export interface Data<T> {
  items: T;
  pageNumber: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
