import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, CardContent, Divider, Chip, Grid, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import IApp from "../../interfaces/IApp";
import styles from "./ListApplication.module.scss";


const url = 'https://moneyapp.onrender.com/application';

const ListApplication = () => {

    const [applications, setApplications] = useState<IApp[]>([]);

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        axios
            .get(url)
            .then(response => {
                setApplications(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [applications])


    return (

        <>
            {applications.map(item => (
                <Card sx={{ minWidth: 200 }} color="text-secondary">


                    <h2 className="mt-2"> {item.type}</h2>
                    <h3> {item.application} </h3>
                    <Grid container spacing={4}>
                        <CardContent>
                            <div className={styles.main} >
                                <Chip label="Account ID:" color="primary" variant="outlined" /> <h4>{item.account_id}</h4>

                                <Chip label="Moeda:" color="success" variant="outlined" />
                                <h4>
                                    {item.currency}

                                </h4>
                                <Chip label="Valor:" color="primary" variant="outlined" />
                                <h4>
                                    {item.value?.$numberDecimal}

                                </h4>
                                <Chip label="Vencimento:" color="primary" variant="outlined" />
                                <h4>
                                    {item.expiration || "FALSE"}

                                </h4>

                                <Chip label="Data de Aplicação:" color="primary" variant="outlined" />
                                <h4>
                                    {item.applicated_at}

                                </h4>
                                <Chip label="Data de Vencimento:" color="primary" variant="outlined" />

                                <h4>
                                    {item.expiration_date}
                                </h4>

                                <Chip label="Resgatado:" color="primary" variant="outlined" />

                                <h4>
                                    {item.flag_redemption || "FALSE"}

                                </h4>


                            </div>
                            <li><Button className="btn-form" color="warning" variant="contained" onClick={handleOpen}>Detalhes</Button></li>
  
                            <Dialog open={open} onClose={handleClose}>
                                <DialogTitle>Aplicação {item.currency} </DialogTitle>
                                <DialogContent>
                                    <p>ID: {item._id}</p>
                                    <p>Valor: {item.value?.$numberDecimal}</p>

                                    <p>Data de Vencimento: {item.expiration_date}</p>
                                    <p>Data de Registro: {item.applicated_at}</p>

                                 </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                        Fechar
                                    </Button>
                                </DialogActions>
                            </Dialog>

                        </CardContent>
                    </Grid>
                    <Divider style={{ background: 'black' }} variant="middle" />

                </Card>

            ))}
        </>
    )

}

export default ListApplication;