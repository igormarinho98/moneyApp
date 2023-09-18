import Withdraw from "../models/Withdraw.js";
import Application from "../models/Application.js";
import Account from "../models/Account.js";

class WithdrawController {
  static listWithdraw = async (req, res) => {
    try {
      const data = await Withdraw.find();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).send({ message: `${err.message} - erro ao listar aplicações!` });
    }
  };

  static withdrawInvestment = async (req, res) => {
    const { id } = req.body;

    try {
      const withdraw = await Application.findById(id);

      const agency = withdraw.agency;
      const account_number = withdraw.account_number;

      const account = await Account.findOne({ agency, account_number }).exec();

      if (withdraw.flag_redemption) {
        return res.status(500).send({ message: "Withdraw Done yet!." })
      } 

      withdraw.flag_redemption = true;

      await withdraw.save();
      
      
      if (!withdraw) {
        return res.status(404).send({ message: 'Application not found' });
      }
      
      if (!account) {
        return res.status(404).send({ message: 'Account not found' });
      }
       
        account.balance += withdraw.investmentAmount;
        
        await account.save();
      

      const newWithdraw = new Withdraw({
        agency: agency,
        account_number: account_number,
        currency: 'BRL',
        type: 'WITHDRAW',
        investmentAmount: withdraw.investmentAmount
      });

      await newWithdraw.save();

      return res.status(200).send({ message: 'Withdraw successful', newWithdraw });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  };

  static listById = async (req, res) => {
    const id = req.params.id;
    try {
      const data = await Withdraw.findById(id);
      if (data) {
        res.status(200).send(data.toJSON());
      } else {
        res.status(404).send({ message: 'Resgate não encontrado' });
      }
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };
}

export default WithdrawController;
