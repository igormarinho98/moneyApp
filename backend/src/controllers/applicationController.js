    import Application from "../models/Application.js";

    class ApplicationController {
        static listApp = (req, res) => {
            Application.find((err, data) => {
                res.status(200).json(data)
            });
        }

        static createApp = (req, res) => {
            let app = new Application(req.body);

            app.save((err) => {
                if (err) {
                    res.status(500).send({message:`${err.message} - erro ao criar aplicação!`})
                } else {
                    res.status(201).send(app.toJSON())
                }
            });
        }

        static listById = (req, res) => {
            const id = req.params.id;
            Application.findById(id, (err, data) => {
                if(!err) {
                    res.status(200).send(data.toJSON())
                } else {
                    res.status(500).send({message: err.message})
                }
            })
        }



    }

    export default ApplicationController;