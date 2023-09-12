import Account from "../models/Account.js";
import Application from "../models/Application.js";

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


  static listApplicationByAccount = async (req, res) => {
    const id = req.params.id;
    try {
      const data = await Application.find({account_id: id});
      res.status(200).json(data);
    } catch (err) {
      res.status(500).send({ message: `${err.message} - falha ao listar aplicacoes!` });
    }
  };

  static makeInvestment = async (req, res) => {
    const { accountId, investmentAmount } = req.body;

    try {
      const account = await Account.findById(accountId);
      if (!account) {
        return res.status(404).send({ message: 'Account not found' });
      }
      if (account.balance < investmentAmount) {
        return res.status(400).send({ message: 'Insufficient balance' });
      }

      // Deduct the investment amount from the account balance
      account.balance -= investmentAmount;

      // Save the updated account
      const updatedAccount = await account.save();


      const tiposCDB = [
        'CDB Básico',
        'CDB Plus',
        'CDB Premium',
        'CDB Especial',
        // Adicione mais tipos de CDB conforme necessário
      ];

      const indiceAleatorio = Math.floor(Math.random() * tiposCDB.length);

    // Acessar o item aleatório usando o índice gerado
    const tipoCDBAleatorio = tiposCDB[indiceAleatorio];

      const newApplication = new Application({
        account_id: accountId,
        type: `${tipoCDBAleatorio} ++`,
        value: investmentAmount,
        currency: 'BRL'
      });
      try {
        await newApplication.save();
      } catch (err){
        console.log(err);
      }


      return res.status(200).send({ message: 'Investment successful', updatedAccount });
    } catch (err) {
      return res.status(500).send({ message: err.message });
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
