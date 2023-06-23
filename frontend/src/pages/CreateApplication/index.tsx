import { useState } from "react";
import NavBar from "../../components/Navbar"
import { Button, Grid, TextField } from "@mui/material";
import styles from "./CreateApplication.module.scss";
import axios from "axios";

const url = 'https://moneyapp.onrender.com/application';


const CreateApplication =  () => {

    const [userId, setUserId] = useState('');
    const [type, setType] = useState('');
    const [value, setValue] = useState('');
    const [currency, setCurrency] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {

            const data = {
                user_id: userId,
                type: type,
                value: value,
                currency: currency,
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
                <h3>Tela de Criação de Aplicação</h3>
                <form onSubmit={handleSubmit}>

                    <Grid container spacing={2}>
                        <Grid item xs={8}>

                            <TextField
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                                id="filled-basic"
                                label="User ID"
                                variant="filled"
                                margin="dense" />
                        </Grid>

                        <Grid item xs={8}>

                            <TextField
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                id="filled-basic"
                                label="Tipo"
                                variant="filled" />
                        </Grid>


                        <Grid item xs={8}>
                            <TextField
                                value={value}
                               onChange={(e) => setValue(e.target.value)}
                                id="filled-basic"
                                label="Conta"
                                variant="filled" />

                        </Grid>

                        <Grid item xs={8}>


                            <TextField
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                                type="text"
                                label="Moeda"
                                variant="filled" />

                        </Grid>





                    </Grid>
                    <Button type="submit" variant="contained">Criar</Button>
                </form>
      
            </div>
        </>
    )
}

export default CreateApplication;