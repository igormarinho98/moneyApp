import mongoose from "mongoose"

async function main(){
       await mongoose.connect("mongodb+srv://igormarinholeo2014:EgpIbivRcxXXs6YP@cluster0.cpzxui5.mongodb.net/devProject");
}

main()
let db = mongoose.connection;

export default db;

