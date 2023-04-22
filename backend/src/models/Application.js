    import mongoose from "mongoose";
    import User from "./User.js";

    const Schema = mongoose.Schema;

    const appSchema = Schema ({

    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User',  required: true},
    application: {type: mongoose.Schema.Types.ObjectId, auto: true },
    applicated_at: {type: Date, default: Date.now},
    type: {type: String, required:true},
    value: {type: mongoose.Types.Decimal128, required: true },
    currency: {type: String, required: true},
    expiration: {type: Boolean, default: false},
    expiration_date: {type: Date, default: Date.now},
    flag_redemption: {type: Boolean, default: false}

  });

  const Application = mongoose.model('Application', appSchema);

  export default Application;       
 