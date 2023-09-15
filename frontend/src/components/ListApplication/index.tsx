import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, CardContent, Divider, Chip, Grid, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import IApp from "../../interfaces/IApp";
import styles from "./ListApplication.module.scss";
import AppDetailsModal from "../AppDetailsModal";


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
                    <h2 className="mt-2"> {item.type}</h2>


                            <div className={styles.main} >
 
                                <Chip label="Data de Aplicação:" color="success" variant="outlined" />
                                <h4>
                                    {item.applicated_at}

                                </h4>

                                <Chip label="Conta:" color="success" variant="outlined" />
                                <h4>
                                    {item.account_number}

                                </h4>
                              

                            </div>
                            <li>
                            <Button className="btn-form" color="warning" variant="contained" onClick={() => handleOpen(item)}>Detalhes            </Button>

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