import React from "react";
import { Link } from "react-router-dom";
import User from "../../components/User";
import styles from "./User.module.scss";
import { Paper } from "@mui/material";

  function App () {
    return (
        <div className={styles.header}>
           
            <User></User>
        </div>
    )
  }

  export default App;