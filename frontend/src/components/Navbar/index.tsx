import React from "react";
import { Breadcrumbs, Link, Alert } from "@mui/material";
import styles from "./Navbar.module.scss"; // Importe os estilos SASS

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <Alert variant="filled" severity="success">
        WEBvest
      </Alert>
      <Breadcrumbs aria-label="Menu" className={styles["navbar-links"]}>
        <Link underline="hover" color="inherit" href="/">
          Início
        </Link>
        <Link underline="hover" color="inherit" href="/account">
          Gestão de Contas
        </Link>
        <Link underline="hover" color="inherit" href="/user">
          Gestão de Usuários
        </Link>
        <Link underline="hover" color="inherit" href="/application">
          Todas Aplicações
        </Link>

        <Link underline="hover" color="inherit" href="/applicationp">
          Aplicações Pendentes
        </Link>
      </Breadcrumbs>
      <h2 className={styles["navbar-title"]}>Sistema de Conta Corrente</h2>
    </div>
  );
}

export default NavBar;
