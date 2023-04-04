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

/*
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'My Money API',
      version: '1.0.0',
      description: 'Money API',
    },
    servers: [{ url: 'http://localhost:3000' }],
  },
  apis: ['./app.js'],
  outputFile: './swagger_output.json'
};
  swaggerAutogen()(app, swaggerOptions);

*/
    const corsOptions = {
        methods: 'GET',
        allowedHeaders: 'Authorization'
    };

    app.use(express.json(), cors(corsOptions))




    routes(app); 

export default app;
