import {  Breadcrumbs,Link, Alert } from "@mui/material";



const NavBar = () => {

    return (
        <>
         <Alert variant="filled" severity="success">
          WEBvest
        </Alert>

        <Breadcrumbs aria-label="Menu">
  <Link underline="hover" color="inherit" href="/">
    Início
  </Link>
  <Link
    underline="hover"
    color="inherit"
    href="/accounts"
    >
    Gestão de Contas
  </Link>

  <Link
    underline="hover"
    color="inherit"
    href="/users"
    >
    Gestão de Usuários
  </Link>
  <Link
    underline="hover"
    color="inherit"
    href="/applications"
    >
    Aplicações
  </Link>
</Breadcrumbs>
<h2>Sistema de Conta Corrente</h2>

        </>
);
}



export default NavBar;