import { useState } from "react";
import NavBar from "../../components/Navbar"
import { Button, Grid, TextField } from "@mui/material";
import styles from "./CreateApplication.module.scss";
import axios from "axios";
import { Link, redirect } from "react-router-dom";

const url = 'https://moneyapp.onrender.com/account/invest';
// const urlDev = 'https://localhost:3000/account/invest';


const CreateApplication = () => {

    const [agency, setAgency] = useState('');
    const [accountNumber, setAccountNumber]= useState('');
    const [investmentAmount, setInvestmentAmount] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {

            const data = {
                agency: agency,
                accountNumber:accountNumber,
                investmentAmount: investmentAmount,
            };

            const response = await axios.post(url, data);
            console.log(response.data)
            alert(`Aplicação Realizada! Agencia ${data.agency} Conta${data.accountNumber}Valor R$ ${data.investmentAmount}`)
            redirect('/')
        } catch (error) {
            console.error(error)
        }


    }

    return (
        <>
            <div className={styles.header}>

                <NavBar />
                <h3>Tela de Criação de Aplicação</h3>
                <form onSubmit={handleSubmit}>

                    <Grid container spacing={2}>




                        <Grid item xs={8}>


                            <TextField
                                value={agency}
                                onChange={(e) => setAgency(e.target.value)}
                                type="text"
                                label="agency"
                                variant="filled" />

                        </Grid>


                        <Grid item xs={8}>


                            <TextField
                                value={accountNumber}
                                onChange={(e) => setAccountNumber(e.target.value)}
                                type="text"
                                label="Account Number"
                                variant="filled" />

                        </Grid>

                        <Grid item xs={8}>
                            <TextField
                                value={investmentAmount}
                                onChange={(e) => setInvestmentAmount(e.target.value)}
                                id="filled-basic"
                                label="Valor"
                                variant="filled" />

                        </Grid>








                    </Grid>
                    <Button type="submit" variant="contained">Criar</Button>


                </form>

                <form >

                    <Button href="/application" variant="outlined">Voltar

                    </Button>
                </form>
            </div>
        </>
    )
}

export default CreateApplication;