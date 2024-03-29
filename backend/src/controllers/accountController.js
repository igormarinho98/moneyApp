import Account from "../models/Account.js";
import Application from "../models/Application.js";
import mongoose from "mongoose";
 
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


  static listApplicationByAccountId = async (req, res) => {
    const id = req.params.id;
    try {
      const accountId = mongoose.Types.ObjectId(id);
      console.log(accountId);
      const data = await Application.findById({account_id: accountId});
      res.status(200).json(data);
    } catch (err) {
      res.status(500).send({ message: `${err.message} - falha ao listar aplicacoes!` });
    }
  };

  static makeInvestment = async (req, res) => {
    const { agency, account_number, investmentAmount, rentability } = req.body;
  
    try {
       const account = await Account.findOne({ agency, account_number }).exec();
  
      if (!account) {
        return res.status(404).send({ message: 'Account not found' });
      }
      if (account.balance < investmentAmount) {
        return res.status(400).send({ message: 'Insufficient balance' });
      }
  
       account.balance -= investmentAmount;
  
         await account.save();
  
       const newApplication = new Application({
        agency: agency,
        account_number: account_number,
        investmentAmount: investmentAmount,
        rentability:rentability,
        currency: 'BRL'
      });
  
       await newApplication.save();
  
      return res.status(200).send({ message: 'Investment successful', newApplication });
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
