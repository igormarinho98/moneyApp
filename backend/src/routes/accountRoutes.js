    import express from "express";

    import AccountController from "../controllers/accountController.js";

    const router = express.Router();

    router
        .get("/account", AccountController.listAccount)
        .get("/account/:id", AccountController.listAccountById)
        .post("/account", AccountController.createAccount)
        .post("/account/invest", AccountController.makeInvestment)
        .post("/account/withdraw", AccountController.withdrawInvestment)
        .get('/account/invest/:id', AccountController.listApplicationByAccountId)
        .put("/account/:id", AccountController.updateAccount)
        .delete("/account/:id", AccountController.deleteAccount)
        
        export default router;

