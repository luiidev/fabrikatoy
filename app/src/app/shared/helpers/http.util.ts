import { of } from "rxjs";

export default class HttpUtils {
  static paginationCatchError() {
    const pagination = {
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
