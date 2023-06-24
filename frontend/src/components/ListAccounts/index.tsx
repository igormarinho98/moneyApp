import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import styles from "./ListAccounts.module.scss";
 

import IAccount from "../../interfaces/IAccount";
import { CardContent, Divider, Chip } from "@mui/material";

const url = 'https://moneyapp.onrender.com/account';




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
                <li className={styles.main} key={dado._id as any}>  
                <Chip label="ID Conta : " color="primary"  variant="outlined" />  
     
                 {dado._id }
                  <p key={dado.created_at} >
                  <Chip label="Data de Criação : " color="success" variant="outlined" />  
     
                    {dado.created_at}
                    </p>
               <p>
                <Chip label="Agencia :" color="success" variant="outlined" /> {dado.agency} 
                </p> 
                  <p key={dado.account_number}>
                  <Chip label="Conta :" color="success" variant="outlined" />  
                     {dado.account_number}</p>
                  <p key={dado.balance.$numberDecimal} >
                  <Chip label="Saldo :" color="success" variant="outlined" />  
                     {dado.balance.$numberDecimal}</p>

                  <p key={dado.user_id} className={styles.linha}>
                     <Chip label=" User ID : " color="primary" variant="outlined" />
                    
                    {dado.user_id}</p>
                <li><Button color="warning" variant="contained">Editar</Button></li>
                  <li><Button color="error" variant="contained">Excluir</Button></li>


                </li>
              </div>
            </CardContent>
            <Divider style={{ background: 'black'}} variant="middle" />
          </Card>
        ))}
      </ul>
    </div>
  );

}



export default ListAccount;