import express from "express";
import account from "./accountRoutes.js"
import userRoutes from "./userRoutes.js";


const routes = (app) => {
    app.route("/").get((req, res) => {
        res.send("Hello World")
    })

    app.use(
        express.json(),
        account,
        userRoutes
    )

}

export default routes;

