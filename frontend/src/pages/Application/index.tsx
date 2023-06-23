import IApp from "../../interfaces/IApp";
import ListApplication from "../../components/ListApplication";
import NavBar from "../../components/Navbar";
import styles from "./Application.module.scss"
import { Link, Paper, Button } from "@mui/material";

interface AppProps {
  app?: IApp
}

const Application = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className={styles.header}>
        <ListApplication />
      </div>
      <div>
      <Paper>
        <Link
          href="/application/create"
        >
    <Button variant="contained">
          
          Criar
      </Button>
        </Link>

      </Paper>
    </div>

    </>
  )
}

export default Application;