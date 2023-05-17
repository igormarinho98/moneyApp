import Account from "../models/Account.js";

  class AccountController {
      static listAccount = (req, res) => {
        Account.find((err, data) =>{
            res.status(200).json(data)
        })
      }

      static createAccount = (req, res) => {
        let account = new Account(req.body);

        account.save((err) => {
          if (err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar conta!`})
          } else {
            res.status(201).send(account.toJSON())
          }

        })
      }


      static updateAccount = (req, res) => {
        const id = req.params.id

        Account.findByIdAndUpdate(id, {$set: req.body}, (err) => {
          if(!err){
            res.status(200).send({message: 'Conta Atualizada com sucesso'})
          } else {
            res.status(500).send({message: err.message})
          }

        })
 
      }

     static listAccountById = (req, res) => {
      const id = req.params.id;
      Account.findById(id, (err, data) => {
        if (!err){
          res.status(200).send(data.toJSON())
        } else {
          res.status(500).send({message: err.nessage})
        }
      })
     }

       
      
      static deleteAccount = (req, res) => {
        const id = req.params.id

        Account.findByIdAndDelete(id, (err) => {
          if(!err) {
            res.status(200).send({message: 'Conta removida'})
          } else {
            res.status(500).send({message: err.message})
          }

        })

  }


    }



export default AccountController;