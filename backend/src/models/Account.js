  import { mongoose } from "mongoose";
  import User from "./User.js";

  const Schema = mongoose.Schema;

  const accountSchema = new Schema({

     
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User',  required: true},
    agency: {type: String},
    account_number: {type: String, required: true},
    balance: {type: mongoose.Types.Decimal128, default: 0.0},
    created_at:{type: Date, default: Date.now}

});


  const Account = mongoose.model('Account', accountSchema);

  export default Account;