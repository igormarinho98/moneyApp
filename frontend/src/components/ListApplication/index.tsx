import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, CardContent, Divider, Chip, Grid, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import FeedIcon from '@mui/icons-material/Feed';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import IApp from "../../interfaces/IApp";
import styles from "./ListApplication.module.scss";
import AppDetailsModal from "../AppDetailsModal";
import BarChartIcon from '@mui/icons-material/BarChart';

const url = 'https://moneyapp.onrender.com/application';

const ListApplication = () => {

    const [applications, setApplications] = useState<IApp[]>([]);

    const [selectedApplication, setSelectedApplication] = useState<IApp | null>(null);



    const handleOpen = (application: IApp) => {
        setSelectedApplication(application);
    };

    const handleClose = () => {
        setSelectedApplication(null);
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


                    <Grid container spacing={2}>
                        <CardContent>
                            <Card className={styles.cardApp}>
                                <h2 className="mt-2">
                                <BarChartIcon sx={{fontSize: 35, color: "green"}} />
                                     {item.type}
                                     </h2>

                                <div className={styles.main} >

                                    <Chip label="Data de Aplicação:" color="success" variant="filled" />
                                    <h4>
                                        {item.applicated_at}

                                    </h4>

                                    <Chip label="Conta:" color="success" variant="filled" />
                                    <h4>
                                        {item.account_number}

                                    </h4>

                                    <TurnedInIcon sx={{fontSize: 40 }} color="action"/>
 
                                    {item.flag_redemption ? (
                                        // Se item.flag_redemption for verdadeiro, exibir um ícone e texto diferente
                                        <div className={styles.outroStatus}>
                                            <DoneAllIcon style={{fontSize: 40, color: "green" }} /> RESGATADO
                                        </div>
                                    ) : (
                                        // Se item.flag_redemption não for verdadeiro, exibir INVESTIDO
                                        <div className={styles.investido}>
                                            <AttachMoneyIcon style={{fontSize: 40, color: "red" }} /> INVESTIDO
                                        </div>
                                    )}

                                </div>
                                <li>

                                    <Button className="btn-form" color="warning" variant="contained" onClick={() => handleOpen(item)}>Detalhes
                                        <FeedIcon>

                                        </FeedIcon>
                                    </Button>

                                </li>
                            </Card>



                        </CardContent>
                    </Grid>
                    <Divider style={{ background: 'black' }} variant="middle" />

                </Card>

            ))}

            <AppDetailsModal open={selectedApplication !== null} onClose={handleClose} application={selectedApplication} />

        </>
    )

}

export default ListApplication;