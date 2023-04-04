import IAccount from "../../interfaces/IAccount";
import NavBar from "../Navbar";

    interface AccountProps {
        account?: IAccount
    }


    const Account = ({ account } : AccountProps) => {
        return (
            <div>
                <NavBar/>
                <h2>Account Managament</h2>

            </div>
        )
    }

    export default Account;