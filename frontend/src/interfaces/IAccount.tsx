export default interface IAccount {
    _id?: string;
    user_id: string;
    agency: string;
    account_number: string;
    balance: {
      $numberDecimal: string;
    };
    created_at?: string;
    __v?: number;

}

 