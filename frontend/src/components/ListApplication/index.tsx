import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, CardContent, Divider, Chip, Grid } from "@mui/material";
import IApp from "../../interfaces/IApp";
import styles from "./ListApplication.module.scss";


const url = 'https://moneyapp.onrender.com/application';

const ListApplication = () => {

    const [applications, setApplications] = useState<IApp[]>([]);

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
                <Card sx={{ minWidth: 275 }} color="text-secondary">


                    <h2 className="mt-2"> {item.type}</h2>
                    <h3> {item.application} </h3>
                    <Grid container spacing={2}>
                    <CardContent>
                        <div className={styles.main} >
                         <Chip label="Account ID:" color="primary"  /> <h4>{item.account_id}</h4>  
                                
                            <Chip label="Moeda:" color="success"  />
                            <h4>
                             {item.currency} 

                            </h4>
                             <Chip label="Valor:" color="primary"  />
                             <h4>
                             {item.value?.$numberDecimal}

                             </h4>
                             <Chip label="Vencimento:" color="primary"  />
                             <h4>
                              {item.expiration || "FALSE"} 

                             </h4>

                             <Chip label="Data de Aplicação:" color="primary"  />
                             <h4>
                              {item.applicated_at} 

                             </h4>
                             <Chip label="Data de Vencimento:" color="primary"  />
                             
                             <h4>
                                 {item.expiration_date}
                                </h4>

                             <Chip label="Resgatado:" color="primary"  />
                             
                             <h4>
                             {item.flag_redemption || "FALSE"}

                             </h4>
                            <li><Button className="btn-form" color="warning" variant="contained">Editar</Button></li>
                            <li><Button color="error" variant="contained">Excluir</Button></li>


                        </div>
                    </CardContent>
            </Grid>
                    <Divider light />

                </Card>
                
            ))}
        </>
    )

}

export default ListApplication;