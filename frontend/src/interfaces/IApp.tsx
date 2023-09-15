export default interface IApp {
    _id?: string;
    user_id: string;
    application?: string;
    account_id?: string;
    agency?: string;
    account_number?:string;
    type?: string;
    investmentAmount?: number;
    currency?: string;
    flag_redemption?: false;
    applicated_at?: string;
    expiration?: boolean;
    expiration_date?: string;
    __v?: number;
};


