import mongoose from "mongoose"

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username:{type: String, required: true, unique: true},
        password:{type: String, required: true},
        email:{type: String},
        first_name: {type: String},
        last_name: {type: String},
        created_at: {type: Date, default: Date.now}
});

  

const User = mongoose.model('User', userSchema);

export default User;