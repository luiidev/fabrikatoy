import { Company } from "./company.model";

export interface Provider {
  id?: number;
  company_id?: number;
  ruc: string;
  name: string;
  address: string;
  website?: string|null;
  state: number;
  company?: Company;
}

export default class ProviderRequest {
  static data(provider: Provider) {
    let data:any = {
      ruc: provider.ruc,
      name: provider.name,
      address: provider.address,
      website: provider.website,
      state: provider.state,
    };

    if (provider.company_id) {
      data.company_id = provider.company_id;
    }

    if (provider.id) {
      data.id = provider.id;
    }

    return data;
  }
}
