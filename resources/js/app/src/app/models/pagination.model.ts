export interface Pagination {
  message: string;
  data: {
    items: []
    page: number;
    pages: number;
    per_page: number;
    total: number;
  };
}
