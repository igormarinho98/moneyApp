import express from "express";
import account from "./accountRoutes.js"
import user from "./userRoutes.js";
import application from "./applicationRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.send("Hello World")
    })

    

    app.use(
        express.json(),
        account,
        user,
        application
     )

}

export default routes;

