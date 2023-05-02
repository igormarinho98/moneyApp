import IAccount from "../../interfaces/IAccount";
import NavBar from "../Navbar";
import styles from "./Account.module.scss";
import CreateAccount from "../CreateAccount";
import { Card, CardContent, Paper } from "@mui/material";

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
                        <CreateAccount />
                        
                    </Paper>
                </CardContent>
            </Card>
         </div>
    )
}

export default AccountX;