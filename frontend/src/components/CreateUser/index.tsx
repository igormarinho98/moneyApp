import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, TextField, Button } from "@mui/material";
import styles from "./CreateUser.module.scss";
import NavBar from "../Navbar";

const url = 'http://localhost:3000/users';


const CreateUser = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstname, setFName] = useState('');
    const [lastname, setLName] = useState('');
    const [createdAt, setCreatedAt] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const data = {
                username: username,
                password: password,
                email: email,
                first_name: firstname,
                last_name: lastname,
                created_at: createdAt || new Date().toISOString()
            };

            const response = await axios.post(url, data);
            console.log(response.data)

        } catch (error) {
            console.log(error)
        };
    }   




    return (
        <>
            <div className={styles.main}>
                <NavBar />

                <h3>Tela de Criação de Usuários</h3>
                <form onSubmit={handleSubmit}>

                    <Grid container spacing={2}>
                        <Grid item xs={8}>

                            <TextField
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                id="filled-basic"
                                label="Nickname"
                                variant="filled"
                                margin="dense" />
                        </Grid>

                        <Grid item xs={8}>

                            <TextField
                                value={firstname}
                                onChange={(e) => setFName(e.target.value)}
                                id="filled-basic"
                                label="Nome"
                                variant="filled"
                                margin="dense" />
                        </Grid>

                        <Grid item xs={8}>

                            <TextField
                                value={lastname}
                                onChange={(e) => setLName(e.target.value)}
                                id="filled-basic"
                                label="Sobrenome"
                                variant="filled"
                                margin="dense" />
                        </Grid>

                        <Grid item xs={8}>

                            <TextField
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                id="filled-basic"
                                label="Senha"
                                variant="filled" />
                        </Grid>


                        <Grid item xs={8}>
                            <TextField
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id="filled-basic"
                                label="Email"
                                variant="filled" />

                        </Grid>

                        <Grid item xs={8}>


                            <TextField
                                value={createdAt}
                                onChange={(e) => setCreatedAt(e.target.value)}
                                type="text"
                                label="Criado em"
                                variant="filled" />

                        </Grid>





                    </Grid>
                    <Button type="submit" variant="contained">Criar</Button>
                </form>
            </div>
        </>
    )
}



export default CreateUser;