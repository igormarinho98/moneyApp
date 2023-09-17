import express from "express";
import WithdrawController from "../controllers/withdrawController.js";

const router = express.Router();

router
    .get("/withdraw", WithdrawController.listWithdraw)
    .get("/withdraw/:id", WithdrawController.listById)
    .post("/withdraw", WithdrawController.withdrawInvestment)


export default router;  