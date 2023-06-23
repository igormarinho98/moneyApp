 import IUser from "../../interfaces/IUser";
 import ListUsers from "../ListUsers";
 import NavBar from "../Navbar";
import CreateUser from "../CreateUser";
import { Button, Link } from "@mui/material";
 
  interface UserProps {
    user?: IUser
  }


   const User =  ({ user } : UserProps ) => {

    return (
        <div>
          <NavBar/>
          <Button type="submit" variant="contained">

                            <Link
                                underline="hover"
                                color="inherit"
                                href="/user/create"
                            >
                                Criar
                            </Link>
                        </Button>
          <ListUsers/>
        </div>
    )

   }
 
 export default User;