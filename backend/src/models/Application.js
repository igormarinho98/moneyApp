    import mongoose from "mongoose";
    import User from "./User.js";

    const Schema = mongoose.Schema;

    const appSchema = Schema ({

    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User',  required: true},
    idApp: {type: mongoose.Schema.Types.ObjectId, auto: true },
    applicated_at: {type: Date, default: Date.now},
    type: {type: String, required:true}

  });

  const Application = mongoose.model('Application', appSchema);

  export default Application;       
 