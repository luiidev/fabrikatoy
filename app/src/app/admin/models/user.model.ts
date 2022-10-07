import { Company } from "./company.model";

export interface User {
    id?: number | null;
    company_id?: number | null;
    branch_office_id?: number | null;
    nick?: string;
    password?: string;
    first_name?: string;
    last_name?: string;
    full_name?: string;
    dni?: string;
    email?: string;
    address?: string;
    phone?: string;
    image?: string;
    role?: number;
    role_name?: string;
    state?: number;
    company?: Company;
}
