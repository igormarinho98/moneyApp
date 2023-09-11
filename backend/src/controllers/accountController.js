import Account from "../models/Account.js";

class AccountController {
  static listAccount = async (req, res) => {
    try {
      const data = await Account.find();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).send({ message: `${err.message} - falha ao listar contas!` });
    }
  };

  static createAccount = async (req, res) => {
    try {
      const account = new Account(req.body);
      await account.save();
      res.status(201).send(account.toJSON());
    } catch (err) {
      res.status(500).send({ message: `${err.message} - falha ao cadastrar conta!` });
    }
  };

  static updateAccount = async (req, res) => {
    const id = req.params.id;
    try {
      await Account.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: 'Conta Atualizada com sucesso' });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  static listAccountById = async (req, res) => {
    const id = req.params.id;
    try {
      const data = await Account.findById(id);
      if (data) {
        res.status(200).send(data.toJSON());
      } else {
        res.status(404).send({ message: 'Conta não encontrada' });
      }
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  static deleteAccount = async (req, res) => {
    const id = req.params.id;
    try {
      const result = await Account.findByIdAndDelete(id);
      if (result) {
        res.status(200).send({ message: 'Conta removida' });
      } else {
        res.status(404).send({ message: 'Conta não encontrada' });
      }
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };
}

export default AccountController;
