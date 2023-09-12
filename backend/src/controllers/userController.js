import Application from "../models/Application.js";
import User from "../models/User.js";

class UserController {
  static listUser = async (req, res) => {
    try {
      const data = await User.find();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).send({ message: `${err.message} - falha ao listar usuários!` });
    }
  };


  

  static createUser = async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).send(user.toJSON());
    } catch (err) {
      res.status(500).send({ message: `${err.message} - falha ao cadastrar usuário!` });
    }
  };

  static updateUser = async (req, res) => {
    const id = req.params.id;
    try {
      await User.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: "Usuário atualizado" });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  static deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
      const result = await User.findByIdAndDelete(id);
      if (result) {
        res.status(200).send({ message: "Usuário excluído" });
      } else {
        res.status(404).send({ message: "Usuário não encontrado" });
      }
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };
}

export default UserController;
