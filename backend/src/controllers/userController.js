import User from "../models/User.js";


class UserController {
    static listUser = (req, res) => {
        User.find((err, data) => {
            res.status(200).json(data)
        });

    }

    static createUser = (req, res) => {
       let user = new User(req.body);

       user.save((err) => {
        if (err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar usuario!`})
        } else {
            res.status(201).send(user.toJSON())
        }

        });
    }

    static updateUser = (req, res) => {
        let id = req.params.id;

        User.findByIdAndUpdate(id, {$set: req.body}, (err) => {
          if(!err) {
            res.status(200).send({message: "Usuário atualizado"})
          } else {
            res.status(500).send({message: err.message})
          }

        });
    }

    static deleteUser = (req, res) => {
        let id = req.params.id;

        User.findByIdAndDelete(id, (err) => {
            if (!err) {
            res.status(200).send({message: "Usuário excluído"})
            } else {
            res.status(500).send({message: err.message})
            }
        });

    }


}

export default UserController;