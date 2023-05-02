import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
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
          <Card sx={{  minWidth: 275 }} color="text-secondary"  >
            <CardContent>
              <div >
                <li className={styles.main} key={dado._id as any}>  ID Conta: {dado._id }
                  <p key={dado.agency} >Agencia: {dado.agency}</p>
                  <p key={dado.account_number}>Conta: {dado.account_number}</p>
                  <p key={dado.balance.$numberDecimal} >Saldo: {dado.balance.$numberDecimal}</p>
                  <p key={dado.created_at} >Criado: {dado.created_at}</p>
                  <p key={dado.user_id} className={styles.linha}>User ID: {dado.user_id}</p>
                <li><Button color="warning" variant="contained">Editar</Button></li>
                  <li><Button color="error" variant="contained">Excluir</Button></li>


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