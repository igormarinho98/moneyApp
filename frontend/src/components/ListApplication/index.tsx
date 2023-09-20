import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, CardContent, Divider, Chip, Grid, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Link } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import FeedIcon from '@mui/icons-material/Feed';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import IApp from "../../interfaces/IApp";
import styles from "./ListApplication.module.scss";
import AppDetailsModal from "../AppDetailsModal";
import BarChartIcon from '@mui/icons-material/BarChart';
import WithdrawValues from "../WithdrawValues";
import CheckIcon from '@mui/icons-material/Check';
const url = 'https://moneyapp.onrender.com/application';

const urlWithdraw = 'https://moneyapp.onrender.com/withdraw';
const ListApplication = () => {

    const [applications, setApplications] = useState<IApp[]>([]);

    const [selectedApplication, setSelectedApplication] = useState<IApp | null>(null);



    const handleOpen = (application: IApp) => {
        setSelectedApplication(application);

    };


    const handleWithdraw = async (appId: string) => {
        try {
            const data = { id: appId };
            const response = await axios.post(urlWithdraw, data);
            console.log(response.data);
            alert(`Aplicação Resgatada! ID: ${appId}`);
        } catch (error) {
            console.error(error);
        }
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




                <div>


                    <Card sx={{ backgroundColor: "#F8F8FF	", minWidth: 200, paddingLeft: 3, paddingBottom: 6, paddingTop: 6 }} color="text-secondary">


                        <Grid container spacing={2}>
                            <CardContent>
                                <Card className={styles.cardApp}>
                                    <h2 className="mt-2">
                                        <BarChartIcon sx={{ fontSize: 35, color: "green" }} />
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

                                        <TurnedInIcon sx={{ fontSize: 40 }} color="action" />

                                        {item.flag_redemption ? (
                                            // Se item.flag_redemption for verdadeiro, exibir um ícone e texto diferente
                                            <div className={styles.outroStatus}>



                                                <DoneAllIcon style={{ fontSize: 40, color: "green" }} /> RESGATADO


                                            </div>
                                        ) : (
                                            <div className={styles.investido}>


                                                <AttachMoneyIcon style={{ fontSize: 40, color: "red" }} /> INVESTIDO

                                                <Button onClick={() => item._id && handleWithdraw(item._id)} color="success" style={{ fontSize: 14, marginLeft: 25 }} variant="contained">
                                                    <CheckIcon>

                                                    </CheckIcon>
                                                    Resgatar
                                                </Button>

                                            </div>



                                        )}

                                    </div>
                                    <li>


                                    </li>
                                </Card>



                            </CardContent>
                        </Grid>

                    </Card>
                    <Card sx={{ backgroundColor: "#F8F8FF", minWidth: 200, paddingLeft: 3, paddingBottom: 6 }}>
                        <Chip label="Valor do Investimento" color="success" variant="filled" />


                        <h3 style={{ fontFamily: 'Arial', fontSize: 22, paddingLeft: 3, paddingBottom: 6, border: 6 }}>
                            R$ {item.investmentAmount}
                        </h3>


                    </Card>
                    <Card sx={{ backgroundColor: "#F8F8FF", minWidth: 200, paddingLeft: 3, paddingBottom: 6 }}>
                        <Chip label="Moeda" color="success" variant="filled" />


                        <h3 style={{ fontFamily: 'Arial', fontSize: 22, paddingLeft: 3, paddingBottom: 6, border: 6 }}>
                            {item.currency}
                        </h3>

                    </Card>

                    <Card sx={{ backgroundColor: "#F8F8FF", minWidth: 200, paddingLeft: 3, paddingBottom: 6 }}>
                        <Chip label="Projeção de resgate" color="success" variant="filled" />

                        <h3 style={{ fontFamily: 'Arial', fontSize: 22, paddingLeft: 3, paddingBottom: 6, border: 6 }}>
                            1 Mês: R$  {item.investmentAmount !== undefined && item.rentability !== undefined
                                ? item.investmentAmount * item.rentability
                                : "Valores não disponíveis"}
                        </h3>

                        <h3 style={{ fontFamily: 'Arial', fontSize: 22, paddingLeft: 3, paddingBottom: 6, border: 6 }}>
                            6 Meses: R$  {item.investmentAmount !== undefined && item.rentability !== undefined
                                ? item.investmentAmount * item.rentability * 6
                                : "Valores não disponíveis"}
                        </h3>

                        <Button className="btn-form" color="warning" variant="contained" onClick={() => handleOpen(item)}>Detalhes
                            <FeedIcon>

                            </FeedIcon>
                        </Button>


                    </Card>

                    <WithdrawValues />

                    <Divider style={{ background: 'black' }} variant="middle" />

                </div>
            ))}


            <AppDetailsModal open={selectedApplication !== null} onClose={handleClose} application={selectedApplication} />

        </>
    )

}

export default ListApplication;