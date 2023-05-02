import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import Button from "@mui/material";
import styles from "./ListAccounts.module.scss";


import IAccount from "../../interfaces/IAccount";
import { CardContent } from "@mui/material";

const url = 'http://localhost:3000/account';




const ListAccount = () => {

  const [accounts, setAccounts] = useState<IAccount[]>([]);

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
          <Card sx={{ bgcolor: "text.disabled", minWidth: 100 }}  >
            <CardContent>
              <div >
                <li className={styles.main} key={dado._id as any}> Account ID: {dado._id }
                  <li key={dado.agency} >Agency: {dado.agency}</li>
                  <li key={dado.account_number}>Account Number: {dado.account_number}</li>
                  <li key={dado.balance.$numberDecimal} >Balance: {dado.balance.$numberDecimal}</li>
                  <li key={dado.created_at} >Created: {dado.created_at}</li>
                  <p key={dado.user_id} className={styles.linha}>User ID: {dado.user_id}</p>
                  <p>Actions:</p>
 
                </li>
              </div>
            </CardContent>
          </Card>
        ))}
      </ul>
    </div>
  );

}



export default ListAccount;