import IAccount from "../../interfaces/IAccount";
import NavBar from "../Navbar";
import styles from "./Account.module.scss";
import CreateAccount from "../../pages/CreateAccount/index";
import { Card, CardContent, Paper, Button, Link } from "@mui/material";

interface AccountProps {
    account?: IAccount
}


const AccountX = ({ account }: AccountProps) => {
    return (
        <div className={styles.main}>

            <Card>
                <CardContent>

                    <Paper>
                        <NavBar />
                        <Button type="submit" variant="contained">

                            <Link
                                underline="hover"
                                color="inherit"
                                href="/account/create"
                            >
                                Criar
                            </Link>
                        </Button>
                    </Paper>
                </CardContent>
            </Card>
        </div>
    )
}

export default AccountX;