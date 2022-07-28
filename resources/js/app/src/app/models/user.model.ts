import { Company } from "./company.model";

export interface User {
    id?: number | null;
    company_id?: number | null;
    nick: string;
    full_name: string;
    email: string;
    address?: string;
    phone?: string;
    image?: string;
    role_name?: string;
    company?: Company;
}
