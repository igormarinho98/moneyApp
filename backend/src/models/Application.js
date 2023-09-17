    import mongoose from "mongoose";
    import User from "./User.js";
    import Account from "./Account.js";

    const Schema = mongoose.Schema;

    const tiposCDB = [
      'CDB Z',
      'CDB X',
      'CDB Y',
      'CDB J',
      'CDB V',
      'CDB I',
      'CDB J',
      'CDB L',
      'CDB K',

     ];

    const numCDB = [1000];

    const numeroAleatorio = Math.floor(Math.random());

    const indiceAleatorio = Math.floor(Math.random() * tiposCDB.length);

   const tipoCDBAleatorio = tiposCDB[indiceAleatorio];
  
  const numCDBAleatorio = numCDB[numeroAleatorio];
  

    const appSchema = Schema ({

    account_number: {type: String, ref: 'Account', required: true},
    agency: {type: String, ref: 'Account', required: true},
    application: {type: mongoose.Schema.Types.ObjectId, auto: true },
    applicated_at: {type: Date, default: Date.now},
    type: {type: String, required:true, default: `${tipoCDBAleatorio} ${numCDBAleatorio} ++`},
    investmentAmount: {type: Number, required: true },
    currency: {type: String, required: true, default: 'BRL'},
    expiration: {type: Boolean, default: false},
    expiration_date: {type: Date, default: Date.now},
    flag_redemption: {type: Boolean, default: false}

  });

  const Application = mongoose.model('Application', appSchema);

  export default Application;       
 