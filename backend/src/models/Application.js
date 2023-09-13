    import mongoose from "mongoose";
    import User from "./User.js";
    import Account from "./Account.js";

    const Schema = mongoose.Schema;

    const appSchema = Schema ({

      account_number: {type: String, ref: 'Account', required: true},
    agency: {type: String, ref: 'Account', required: true},
    application: {type: mongoose.Schema.Types.ObjectId, auto: true },
    applicated_at: {type: Date, default: Date.now},
    type: {type: String, required:true, default: 'CDB X'},
    investmentAmount: {type: Number, required: true },
    currency: {type: String, required: true, default: 'BRL'},
    expiration: {type: Boolean, default: false},
    expiration_date: {type: Date, default: Date.now},
    flag_redemption: {type: Boolean, default: false}

  });

  const Application = mongoose.model('Application', appSchema);

  export default Application;       
 