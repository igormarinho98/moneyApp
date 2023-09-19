import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import styles from "./ListAccounts.module.scss";


import IAccount from "../../interfaces/IAccount";
import { CardContent, Divider, Chip } from "@mui/material";
import AccountDetailsModal from "../AccountDetailsModal";

const url = 'https://moneyapp.onrender.com/account';




const ListAccount = () => {

  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<IAccount | null>(null);


 
  const handleOpen = (account: IAccount) => {
    setSelectedAccount(account);
  };

  const handleClose = () => {
    setSelectedAccount(null);
  };


  useEffect(() => {
    axios.get(url)
      .then(response => {
        setAccounts(response.data)
      })
      .catch(err => {
        console.log(err)
      })

  }, [accounts]);

  return (
    <div>




      <ul>
        {accounts.map(dado => (
          <Card sx={{ minWidth: 200, paddingLeft: 3, paddingBottom: 6, paddingTop: 6 }} color="text-secondary"  >
            <CardContent>
              <div >
                <li className={styles.main} key={dado._id as any}>
 

                
                  <p key={dado.user_id} className={styles.linha}>
                    <Chip label=" User ID : " color="primary" variant="filled" />

                    {dado.user_id}</p>
             
                  <p>
                    <Chip label="Agencia :" color="success" variant="filled" /> {dado.agency}
                  </p>
                  <p key={dado.account_number}>
                    <Chip label="Conta :" color="success" variant="filled" />
                    {dado.account_number}</p>
                    <br></br>
                  <li> <Button color="warning" variant="contained" onClick={() => handleOpen(dado)}>Detalhes</Button></li>
                 
                 


                </li>
              </div>

            </CardContent>
            <Divider style={{ background: 'black' }} variant="middle" />
          </Card>
        ))}
      </ul>
      <AccountDetailsModal open={selectedAccount !== null} onClose={handleClose} account={selectedAccount} />
    </div>
  );

}



export default ListAccount;