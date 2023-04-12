  import React,{ useEffect, useState} from "react";
  import axios from "axios";
  import Card from '@mui/material/Card';

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
            <Card sx={{ minWidth: 275}} color="text-secondary">
            <CardContent>
          <li className={styles.main} key={dado._id as any}>
              <div >
                <p key={dado.user_id} className={styles.linha}>User ID: {dado.user_id}</p>
                <p key={dado.agency} >Agency: {dado.agency}</p>
                <p key={dado.account_number}>Account Number: {dado.account_number}</p>
                <p key={dado.balance.$numberDecimal} >Balance: {dado.balance.$numberDecimal}</p>
               </div>
            </li>
        </CardContent>
          </Card>
          ))} 
        </ul>
      </div>
    );

          }

    

    export default ListAccount;