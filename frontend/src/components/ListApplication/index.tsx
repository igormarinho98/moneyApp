import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent } from "@mui/material";
import IApp from "../../interfaces/IApp";
import styles from "./ListApplication.module.scss";


const url = 'http://localhost:3000/application';

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
                        <h2> {item.type}</h2>
                          <h3> {item.application} </h3> 
                        <CardContent>
                                 <div className={styles.main} >
                                    <p>App ID: {item._id}</p>
                                    <p>Moeda: {item.currency}</p>

                                    <p>Valor: {item.value?.$numberDecimal}</p>
                                    <p>Vencimento: {item.expiration || "FALSE"}</p>

                                    <p>Aplicado: {item.applicated_at}</p>
                                    <p>Data de Vencimento: {item.expiration_date}</p>

                                    <p>Resgatado: {item.flag_redemption || "FALSE"}</p>

  
                                </div>
                        </CardContent>
                    </Card>
                ))}
         </>
    )

}

export default ListApplication;