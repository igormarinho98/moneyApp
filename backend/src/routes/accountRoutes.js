    import express from "express";

    import AccountController from "../controllers/accountController.js";

    const router = express.Router();

    router
        .get("/account", AccountController.listAccount)
        .get("/account/:id", AccountController.listAccountById)
        .post("/account", AccountController.createAccount)
        .get('/account/invest/:id', AccountController.listApplicationByAccountId)
        .post("/account/invest", AccountController.makeInvestment)
        .put("/account/:id", AccountController.updateAccount)
        .delete("/account/:id", AccountController.deleteAccount)
        
        export default router;

