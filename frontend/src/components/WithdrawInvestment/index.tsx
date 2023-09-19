import { useState } from "react";
import NavBar from "../Navbar"
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import styles from "./WithdrawInvestment.module.scss";
import axios from "axios";
import { Link, redirect } from "react-router-dom";
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import AddTaskIcon from '@mui/icons-material/AddTask';
const url = 'https://moneyapp.onrender.com/withdraw';
// const urlDev = 'https://localhost:3000/account/invest';


const WithdrawInvestment = () => {

    const [id, setId] = useState('');
   



    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {

            const data = {
                id
            };

            const response = await axios.post(url, data);
            console.log(response.data)
            alert(`Aplicação Resgatada! ID: ${data.id} `)
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
               

                <h3 style={{fontSize:35, marginBottom: 10}}>Resgatar</h3>
                   <AddTaskIcon sx={{fontSize:45, marginBottom: 5}}/>
                <form onSubmit={handleSubmit}>

                    <Grid container spacing={2}>
 
                        <Grid item xs={8}>


                            <TextField
                                 value={id}
                                onChange={(e) => setId(e.target.value)}
                                type="text"
                                label="Application ID"
                                variant="outlined" />

                        </Grid>
 
                    </Grid>


                    <Button  style={{fontSize:22, paddingTop: 10, marginTop: 10}} type="submit" variant="contained">Resgatar <PublishedWithChangesIcon/> </Button>
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

export default WithdrawInvestment;