    import mongoose from "mongoose";
    import User from "./User.js";
    import Account from "./Account.js";

    const Schema = mongoose.Schema;

    const tiposResgate = 'RESGATE INVESTIMENTO';
      
     
  const numCDBAleatorio = Math.floor(Math.random());
  

    const appSchema = Schema ({

    account_number: {type: String, ref: 'Account', required: true},
    agency: {type: String, ref: 'Account', required: true},
    applicated_at: {type: Date, default: Date.now},
    type: {type: String, required:true, default: `${tiposResgate} ${numCDBAleatorio} ++`},
    investmentAmount: {type: Number, required: true },
    rentability: {type: Number, required: true },
    currency: {type: String, required: true, default: 'BRL'},
    expiration: {type: Boolean, default: false},
    expiration_date: {type: Date, default: Date.now},
    redemption: {type: String, default: 'DONE'}

  });

  const Withdraw = mongoose.model('Withdraw', appSchema);

  export default Withdraw;       
 