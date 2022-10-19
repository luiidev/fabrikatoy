export interface Unit {
  id?: number;
  company_id?: number;
  name: string;
  convesrion_factor?: number;
  unit_id?: number;
  unit?: Unit;
  state: number;
  state_name?: string;
}
