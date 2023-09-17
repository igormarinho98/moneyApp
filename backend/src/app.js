import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import cors from "cors";
// import swaggerUi from "swagger-ui-express";
// import swaggerAutogen from "swagger-autogen";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão com banco feita c sucessoo')
   
})
const app = express();

     const corsOptions = {
        origin: "*",
        methods: "GET, POST, PUT, DELETE",
        allowedHeaders: 'Content-Type'
    };

    app.use(express.json(), cors(corsOptions))

    


    routes(app); 

export default app;
