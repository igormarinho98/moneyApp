    import express from "express";
    import ApplicationController from "../controllers/applicationController.js";
    
    const router = express.Router();

    router
        .get("/application", ApplicationController.listApp)
        .get("/application/:id", ApplicationController.listById)
        .post("/application", ApplicationController.createApp)


        export default router;  