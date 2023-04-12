import {  Breadcrumbs,Link, Alert } from "@mui/material";



const NavBar = () => {

    return (
        <>
         <Alert variant="filled" severity="success">
          WEBvest
        </Alert>

        <Breadcrumbs aria-label="Menu">
  <Link underline="hover" color="inherit" href="/">
    Home
  </Link>
  <Link
    underline="hover"
    color="inherit"
    href="/accounts"
    >
    Accounts
  </Link>

  <Link
    underline="hover"
    color="inherit"
    href="/users"
    >
    Users
  </Link>
</Breadcrumbs>
<h2>Account Managament</h2>

        </>
);
}



export default NavBar;