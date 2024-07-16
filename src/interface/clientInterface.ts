export interface IClient {
    id: number;
    name: string;
    trade_name: string;
    email: string;
    phone: string;
    cpf: string;
    cnpj: string | null;
    address: string;
    city: string;
    state: string;
    country: string;
    postal_code: string | null;
    website: string | null;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}
