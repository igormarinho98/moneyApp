import { TextField, FormControl, InputLabel, Input, InputAdornment, Grid, Button, Hidden } from "@mui/material";
import styles from "./CreateAccount.module.scss";
import axios from "axios";
import React, { useState } from "react";
import NavBar from "../../components/Navbar";


const url = 'http://localhost:3000/account';



const CreateAccount = () => {

    const [userId, setUserId] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [agency, setAgency] = useState('');
    const [balance, setBalance] = useState();
    const [createdAt, setCreatedAt] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {

            const data = {
                user_id: userId,
                account_number: accountNumber,
                agency: agency,
                balance: balance,
                created_at: createdAt || new Date().toISOString()
            };

            const response = await axios.post(url, data);
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }


    }

    return (
        <>
        <div className={styles.header}>

        <NavBar />
                <h3>Tela de Criação de Conta</h3>
                <form onSubmit={handleSubmit}>

                    <Grid container spacing={2}>
                        <Grid item xs={8}>

                            <TextField
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                                id="filled-basic"
                                label="User ID"
                                variant="outlined"
                                margin="dense" />
                        </Grid>

                        <Grid item xs={8}>

                            <TextField
                                value={agency}
                                onChange={(e) => setAgency(e.target.value)}
                                id="filled-basic"
                                label="Agencia"
                                variant="outlined" />
                        </Grid>


                        <Grid item xs={8}>
                            <TextField
                                value={accountNumber}
                                onChange={(e) => setAccountNumber(e.target.value)}
                                id="filled-basic"
                                label="Conta"
                                variant="outlined" />

                        </Grid>

                        <Grid item xs={8}>


                            <TextField
                                value={createdAt}
                                onChange={(e) => setCreatedAt(e.target.value)}
                                type="text"
                                label="Criado em"
                                variant="outlined" />

                        </Grid>





                    </Grid>
                    <Button type="submit" variant="contained">Criar</Button>
                </form>
      
            </div>
        </>
    )
}



export default CreateAccount;