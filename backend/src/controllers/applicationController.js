import Application from "../models/Application.js";

class ApplicationController {
  static listApp = async (req, res) => {
    try {
      const data = await Application.find();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).send({ message: `${err.message} - erro ao listar aplicações!` });
    }
  };

  static createApp = async (req, res) => {
    try {
      const app = new Application(req.body);
      await app.save();
      res.status(201).send(app.toJSON());
    } catch (err) {
      res.status(500).send({ message: `${err.message} - erro ao criar aplicação!` });
    }
  };

  static listById = async (req, res) => {
    const agency = req.body.agency;
    const account_number = req.body.account_number;
    try {
      const data = await Application.find({agency:agency, account_number: account_number, });
      if (data) {
        res.status(200).send(data.toJSON());
      } else {
        res.status(404).send({ message: 'Aplicação não Efetivada' });
      }
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };
}

export default ApplicationController;
