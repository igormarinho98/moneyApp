import mongoose from "mongoose"

async function main(){
       await mongoose.connect(process.env.STRING_CONEXAO_DB);
}

main()
let db = mongoose.connection;

export default db;

