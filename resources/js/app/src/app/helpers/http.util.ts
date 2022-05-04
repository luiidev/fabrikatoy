import { of } from "rxjs";
import { Pagination } from "../models/pagination.model";

export default class HttpUtils {
  static paginationCatchError(response: Pagination) {
    const pagination: Pagination = {
      message: '',
      data: {
        items: [],
        page: 0,
        pages: 0,
        per_page: 0,
        total: 0,
      }
    };

    return of(pagination);
  }
}
