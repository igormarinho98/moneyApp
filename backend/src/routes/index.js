import express from "express";
import account from "./accountRoutes.js"
import user from "./userRoutes.js";
import application from "./applicationRoutes.js";
import withdraw from "./withdrawRoutes.js";


const routes = (app) => {
    app.route("/").get((req, res) => {
        res.json({by: 'IGOR MARINHO LEONARDO', 
                    start: "endpoints below, just access:",
                    application: "/application",
                    users:  "/users",
                    account:  "/account",
                    withdraw:"/withdraws"
                    

    })
    })

    

    app.use(
        express.json(),
        account,
        user,
        application,
        withdraw        
     )

}

export default routes;

