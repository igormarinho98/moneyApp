import { useState } from "react";
import NavBar from "../../components/Navbar"
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import styles from "./CreateApplication.module.scss";
import axios from "axios";
import { Link, redirect } from "react-router-dom";
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import AddTaskIcon from '@mui/icons-material/AddTask';
const url = 'https://moneyapp.onrender.com/account/invest';
// const urlDev = 'https://localhost:3000/account/invest';


const CreateApplication = () => {

    const [agency, setAgency] = useState('');
    const [account_number, setAccountNumber] = useState('');
    const [investmentAmount, setInvestmentAmount] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {

            const data = {
                agency: agency,
                account_number: account_number,
                investmentAmount: investmentAmount,
            };

            const response = await axios.post(url, data);
            console.log(response.data)
            alert(`Aplicação Realizada! Agencia ${data.agency} Conta${data.account_number}Valor R$ ${data.investmentAmount}`)
            redirect('/')
        } catch (error) {
            console.error(error)
        }


    }

    return (
        <>
            <div className={styles.header}>

                <NavBar />
                <div>
                <Card  >
                    <CardContent>
                        <h1>Utilize a conta a seguir para teste: Agencia 89 Conta 78545747</h1>
                    </CardContent>
                </Card>

                </div>
                <Card  >
                    <CardContent>
               

                <h3 style={{fontSize:35, marginBottom: 10}}>Investir</h3>
                   <AddTaskIcon sx={{fontSize:45, marginBottom: 5}}/>
                <form onSubmit={handleSubmit}>

                    <Grid container spacing={2}>




                        <Grid item xs={8}>


                            <TextField
                                 value={agency}
                                onChange={(e) => setAgency(e.target.value)}
                                type="text"
                                label="Agência"
                                variant="outlined" />

                        </Grid>


                        <Grid item xs={8}>


                            <TextField
                                value={account_number}
                                onChange={(e) => setAccountNumber(e.target.value)}
                                type="text"
                                label="Número da Conta"
                                variant="outlined" />

                        </Grid>

                        <Grid item xs={8}>
                            <TextField
                                value={investmentAmount}
                                onChange={(e) => setInvestmentAmount(e.target.value)}
                                id="filled-basic"
                                label="Valor"
                                variant="outlined" />

                        </Grid>








                    </Grid>


                    <Button  style={{fontSize:22, paddingTop: 10, marginTop: 10}} type="submit" variant="contained">Investir <PublishedWithChangesIcon/> </Button>
                </form>



                <Link to="/application" className={styles.link}>
                    <Button style={{fontSize:22, paddingTop: 10,  marginTop: 10}}  variant="outlined">Voltar</Button>
                </Link>
                </CardContent>
                </Card>


            </div>
        </>
    )
}

export default CreateApplication;