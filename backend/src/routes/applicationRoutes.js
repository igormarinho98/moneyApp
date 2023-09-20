    import express from "express";
    import ApplicationController from "../controllers/applicationController.js";
    
    const router = express.Router();

    router
        .get("/application", ApplicationController.listApp)
        .get("/applicationPending", ApplicationController.listPendingApp)
        .get("/applicationByAccount", ApplicationController.listAppByAccount)
        .get("/application/:id", ApplicationController.listById)
        .post("/application", ApplicationController.createApp)


        export default router;  