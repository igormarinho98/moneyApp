    import express from "express";
    import ApplicationController from "../controllers/applicationController.js";
    
    const router = express.Router();

    router
        .get("/application", ApplicationController.listApp)
        .post("/application", ApplicationController.createApp)


        export default router;  