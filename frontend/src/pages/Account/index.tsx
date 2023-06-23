import React from "react";
import styles from "./Account.module.scss";
 

import ListAccount from "../../components/ListAccounts";
import Paper from '@mui/material/Paper';
import Account from "../../components/Account";



  function App() {
    return (
        <div className={styles.header}>
        <Account/>
         
        <h1 className={styles.header}>by Igor Leonardo</h1>
        <Paper variant="outlined" elevation={0} >
        <ListAccount  />
       
        </Paper>
        
        </div>
    )
  }

  export default App;

