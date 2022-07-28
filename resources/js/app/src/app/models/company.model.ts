type Nullable<T> = T | null;

export interface Company {
  id?: number;
  state?: number;
  ruc?: string | null;
  name: string;
  address?: string;
  website?: string;
  state_nane?: string;
  short_logo?: string;
  logo?: string;
}
