import IApp from "../../interfaces/IApp";
import ListApplication from "../../components/ListApplication";
import NavBar from "../../components/Navbar";
import styles from "./Application.module.scss"
import { Link, Paper, Button } from "@mui/material";
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
interface AppProps {
  app?: IApp
}

const Application = () => {
  return (
    <>
      <NavBar></NavBar>
        <Link
          href="/application/create"
        >
    <Button variant="contained">
          Investir
          <PublishedWithChangesIcon/>
      </Button>
        </Link>
      <div className={styles.header}>
        <ListApplication />
      </div>
      <div>
      <Paper>

      </Paper>
    </div>

    </>
  )
}

export default Application;