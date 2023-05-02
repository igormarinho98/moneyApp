import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import NavBar from "../../components/Navbar";
import ModalList from "../../components/ModalList";
import IntegrationNotistack from "../../components/Notification";


function App() {
    return (
        <>
            <NavBar/>
        <div className={styles.Home}>

            <ul className={styles.Central}>
            <h1>webvest</h1>
             

            </ul>

        </div>
        <ModalList/>
        <IntegrationNotistack    />
        </>
    )
}

export default App;