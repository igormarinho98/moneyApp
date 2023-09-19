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


  static listPendingApp = async (req, res) => {
    try {
      const data = await Application.find({flag_redemption: false});
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
    const id = req.params.id;
    try {
      const data = await Application.findById(id);
      if (data) {
        res.status(200).send(data.toJSON());
      } else {
        res.status(404).send({ message: 'Aplicação não encontrada' });
      }
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };
}

export default ApplicationController;
